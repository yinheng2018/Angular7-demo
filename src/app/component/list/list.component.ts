import { Component,OnInit } from '@angular/core'
import { EventManager } from '@angular/platform-browser'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  public list = []
  public ctrlStatus = false
  public cStatus = false
  public vStatus = false
  public clickList = []
  constructor(
    private eventManager: EventManager
  ) { }
  ListJson() {
    let list = JSON.parse(localStorage.getItem("List")) ? JSON.parse(localStorage.getItem("List")) : [
      {
        "checked": false,
        "gwnum": 1, //岗位编号
        "gwnum2": 'ceo1', //岗位编码
        "gwname": '董事长1', //岗位名称
        "code": '1', //显示序列
        "status": 0,//0正常1异常 
        "time": '2021-12-11 18:31:08',//创建时间
      },
      {
        "checked": false,
        "gwnum": 2, //岗位编号
        "gwnum2": 'ceo2', //岗位编码
        "gwname": '董事长2', //岗位名称
        "code": '2', //显示序列
        "status": 0,//0正常1异常 
        "time": '2021-12-12 18:31:08',//创建时间
      },
      {
        "checked": false,
        "gwnum": 3, //岗位编号
        "gwnum2": 'ceo3', //岗位编码
        "gwname": '董事长3', //岗位名称
        "code": '3', //显示序列
        "status": 1,//0正常1异常 
        "time": '2021-12-13 18:31:08',//创建时间
      },
      {
        "checked": false,
        "gwnum": 4, //岗位编号
        "gwnum2": 'ceo4', //岗位编码
        "gwname": '董事长4', //岗位名称
        "code": '4', //显示序列
        "status": 0,//0正常1异常 
        "time": '2021-12-14 18:31:08',//创建时间
      },
      {
        "checked": false,
        "gwnum": 5, //岗位编号
        "gwnum2": 'ceo5', //岗位编码
        "gwname": '董事长5', //岗位名称
        "code": '5', //显示序列
        "status": 0,//0正常1异常 
        "time": '2021-12-15 18:31:08',//创建时间
      },
    ]
    return list
  }
  reset() {
    localStorage.removeItem("List")
    this.list = this.ListJson()
  }
  deepCopy(obj) {
    var a = JSON.stringify(obj)
    var newobj = JSON.parse(a)
    return newobj
  }
  delete(i) {
    let List = this.deepCopy(this.list),Arry = []

    List.map((item,key) => {
      if (key != i) {
        Arry.push(List[key])
      }

    })
    Arry.map((item,key) => {
      item.code = key + 1
      // item.gwnum = key + 1

    })
    this.list = Arry
    localStorage.setItem("List",JSON.stringify(Arry))

  }
  clickCheced(i) {
    let List = this.deepCopy(this.list)

    if (this.ctrlStatus) {
      List[i].checked = !List[i].checked
    }
    this.clickList = []
    List.map((item,index) => {
      if (item.checked) {
        this.clickList.push(item)
      }
    })

    this.list = List
    console.log(111,i,this.clickList,List,this.list)

  }
  edit() { 
    alert("暂时不支持编辑")
  }
  ngOnInit() {
    this.list = this.ListJson()
    this.eventManager.addGlobalEventListener('window','keyup',(e) => {
      console.log(e.keyCode + "keyup")
      if (e.keyCode == 17) {
        this.ctrlStatus = false
      }
      if (e.keyCode == 67) {
        this.cStatus = false
      }
      if (e.keyCode == 86) {
        this.vStatus = false
      }
    })
    this.eventManager.addGlobalEventListener('window','keydown',(e) => {
      console.log(e.keyCode + "keydown")
      if (e.keyCode == 17) {
        this.ctrlStatus = true
      }
      if (e.keyCode == 67) {
        this.cStatus = true
      }
      if (e.keyCode == 86) {
        this.vStatus = true
      }
      if (this.cStatus && this.ctrlStatus) {
        this.list.map((item) => {
          item.checked = true
          this.clickList.push(item)
        })
      }

      if (this.ctrlStatus && this.vStatus) {
        let List = this.deepCopy(this.list)
        this.clickList.map((item) => {
          List.push(item)
        })
        List.map((item,key) => {
          item.checked = false
          item.code = key + 1
          // item.gwnum = key + 1
        })
        this.list = List
        localStorage.setItem("List",JSON.stringify(List))
        this.clickList = []
      }


    })

  }

}
