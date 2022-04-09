import { Component,OnInit } from '@angular/core'
import { EventManager } from '@angular/platform-browser'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  public list = [
    {
      "checked": false,
      "gwnum": 1, //岗位编号
      "gwnum2": 'ceo', //岗位编码
      "gwname": '董事长', //岗位名称
      "code": '1', //显示序列
      "status": 0,//0正常1异常 
      "time": '2021-12-17 18:31:08',//创建时间
    },
    {
      "checked": false,
      "gwnum": 2, //岗位编号
      "gwnum2": 'ceo', //岗位编码
      "gwname": '董事长', //岗位名称
      "code": '2', //显示序列
      "status": 0,//0正常1异常 
      "time": '2021-12-17 18:31:08',//创建时间
    },
    {
      "checked": false,
      "gwnum": 3, //岗位编号
      "gwnum2": 'ceo', //岗位编码
      "gwname": '董事长', //岗位名称
      "code": '3', //显示序列
      "status": 1,//0正常1异常 
      "time": '2021-12-17 18:31:08',//创建时间
    },
    {
      "checked": false,
      "gwnum": 4, //岗位编号
      "gwnum2": 'ceo', //岗位编码
      "gwname": '董事长', //岗位名称
      "code": '4', //显示序列
      "status": 0,//0正常1异常 
      "time": '2021-12-17 18:31:08',//创建时间
    },
    {
      "checked": false,
      "gwnum": 5, //岗位编号
      "gwnum2": 'ceo', //岗位编码
      "gwname": '董事长', //岗位名称
      "code": '5', //显示序列
      "status": 0,//0正常1异常 
      "time": '2021-12-17 18:31:08',//创建时间
    },
  ]
  public ctrlStatus = false
  public cStatus = false
  public vStatus = false
  public clickList = []
  constructor(
    private eventManager: EventManager
  ) { }
  deepCopy(obj) {
    var a = JSON.stringify(obj)
    var newobj = JSON.parse(a)
    return newobj
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
  ngOnInit() {
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
          item.gwnum = key + 1
        })
        this.list = List
        this.clickList = []
      }


    })

  }

}
