import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/Router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private productId:number;
  private productName:string;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.productId = this.routeInfo.snapshot.queryParams['id']
    //因为这个ngOnInit只会执行一次  但是使用时 会出现自身路由到自身 而且传递数据不同 
    // 但是由于只调用一次 参数不会再变更了  所以 需要类似于监听的一个方法来处理这个参数 所以需要用 参数订阅

    //当不需要自身路由到自身时候  那么可以用快照模式 
    //存在自身路由到自身时候 需要用订阅

    //参数快照
    // this.productId = this.routeInfo.snapshot.params['id']

    //参数订阅
     // this.routeInfo.params.subscribe((params:Params)=>this.productId = params["id"])
    this.routeInfo.data.subscribe((data:{product:Product})=>{
      this.productId = data.product.id
      this.productName = data.product.name
    })
      //this.routeInfo.snapshot.params["id"]
  }

}

export class Product{
  
  constructor(public id:number, public name:string){
    
  }
}