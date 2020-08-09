import React from 'react'
import { Line , Bar } from "react-chartjs-2";
import customer from '../img/customer.svg'
import up_arrow from '../img/up-arrow.svg'
import earnings from '../img/earnings.svg'
import products from '../img/products.svg'
import back from '../img/back.svg'
import next from '../img/next.svg'

export default class Earnings extends React.Component{

    total_mWise = (id) => {
        let t = 0 ;
        this.state.month_data.map((e,i) => {
            i == id && (
                e.map(x => {
                    t = parseInt(t) + (parseInt(x.Value)*0.75)
                })
            )
        })
        return t;
    }

    imageHandler = () => {
      this.state.my_pro_list.map((e,i) => {
          i == this.state.num && (
              this.setState(() => {
                  return{
                      img : e.cover_img,
                      tag : e.tag,
                      price : e.Value,
                      title : e.title,
                      cs : this.state.earningInfo[this.state.num],
                      earnings_pcopy : parseInt(this.state.earningInfo[this.state.num])*e.Value*0.75
                  }
              })
              
          )
      })

    }

  

    constructor(props){
        super(props)

        fetch('/api/user/earnings')
        .then((res) => res.json())
        .then((data) => {
            if(data){
                this.setState(() => {   
                    return{
                        copies_sold : data.copies,
                        earnings : data.earnings,
                        m_ear : data.m_earnings,
                        m_pro : data.m_Products,
                        m_cop : data.mCopies,
                        products : data.products
                    }
                })
            }
        })

        fetch('/api/user/monthReport')
        .then((res) => res.json())
        .then((data) => {
            if(data){
                this.setState(() => {   
                    return{
                        month_data : data
                    }
                })
            }
        })

        fetch('/api/user/products')
        .then((res) => res.json())
        .then((data) => {
            if(data){
                this.setState(() => {
                    return {
                        my_pro_list : data,
           
                    }
                })
                this.imageHandler()
            }
        })

        fetch('/api/products/earningInfo')
        .then((res) => res.json())
        .then((data) => {
            if(data){
                this.setState(() => {
                    return{
                        earningInfo : data
                    }
                })
            }
            this.imageHandler()
        })

        fetch('/api/user')
        .then((res) => res.json())
        .then((data) => {
            if(data){
                this.setState(() => {
                    return{
                        username : data.username
                    }
                })
            }
        })
        

        this.state = {
            username : null,
            earnings : 0,
            m_ear : 0,
            m_cop : 0,
            m_pro : null,
            copies_sold : 0,
            products : 0,
            month_data : [],
            num : 0,
            my_pro_list : [],
            img : null,
            tag : null,
            price : null,
            title : null,
            cs : null,
            earningInfo : [],
            earnings_pcopy : 0
        }
    }

    render(){
        let data = {
            labels: ["" ,"Week1", "Week2", "Week3", "Week4"],
            datasets: [
              {
                label: "Earnings",
                backgroundColor: '#91F698',
                borderColor: "#34866B",
                data: ["" ,this.total_mWise('0') , this.total_mWise('1') , this.total_mWise('2') , this.total_mWise('3')],
                fontSize : '0.5rem'               }
            ]
          };
          let data2 = {
            labels: ["" , "Week1", "Week2", "Week3", "Week4"],
            datasets: [
              {
                label: "Earnings",
                backgroundColor: '#E5F7E1',
                borderColor: "#34866B",
                data: ["" , this.total_mWise('0') , this.total_mWise('1') , this.total_mWise('2') , this.total_mWise('3')],
                fontSize : '1.2rem'               }
            ]
          };
        return(
            <div className = "earnings_pg">
                <div className = "info_bars">
                    <div className = "info_ear_card">
                        <div className = "left">
                            <div>
                                <img src = {customer} alt = " " />
                            </div>
                            <div className = "data">
                                <span className = "num">{this.state.copies_sold > 0 ?this.state.copies_sold : '0'}</span>
                                <br/>
                                <span className = "name">Copies Sold</span>
                            </div>
                        </div>
                        <div className = "right">
                            <img src = {up_arrow} alt = "" />
                            <span>40.5%</span>
                        </div>
                    </div>
                    <div className = "info_ear_card">
                        <div className = "left">
                            <div>
                                <img src = {earnings} alt = " " className = "ear_img" />
                            </div>
                            <div className = "data">
                                <span className = "num">{this.state.earnings > 0 ? this.state.earnings : '0'}</span>
                                <br/>
                                <span className = "name">Earnings</span>
                            </div>
                        </div>
                    <div className = "right">
                        <img src = {up_arrow} alt = "" />
                        <span>40.5%</span>
                    </div>
                    </div>
                    <div className = "info_ear_card">
                        <div className = "left">
                            <div>
                                <img src = {products} alt = " " className = "ear_img" />
                            </div>
                            <div className = "data">
                                <span className = "num">{this.state.products > 0 ? this.state.products : '0'}</span>
                                <br/>
                                <span className = "name">Products</span>
                            </div>
                        </div>
                            <div className = "right">
                            <img src = {up_arrow} alt = "" />
                                <span>40.5%</span>
                            </div>
                        </div>
                </div>
                    <div className="graph_cont">
                      <div className="graph">
                        <Line data={data2} options={{ maintainAspectRatio: true }} />
                      </div>
                      <div className = "graph_bar">
                             <Bar data={data} options={{ maintainAspectRatio: true }} />
                        </div>
                      <div className = "right_gp">
                        <div className = "head">This Month</div>
                            <Info 
                            m_cop = {this.state.m_cop}
                            m_ear = {this.state.m_ear}
                            m_pro = {this.state.m_pro}
                            />
                      </div>
                    </div>

                    <div className = "productwise_ear_chart">
                      <div className = 'slider'  onClick = {async() => {

                    if(this.state.num > 0){   
                       await this.setState((prevState) => {
                            return{
                                num : prevState.num - 1
                            }
                        } )

                       await  this.imageHandler()
                    }
                    }}>
                         <img src = {back} alt = " "  />
                      </div>
                      <div className = "middler">
                        <div className = "img_con">
                            <img src = {`covers/${this.state.img}`} alt = " " />
                        </div>
                        <div className = "details_div_ear">
                            <div className = "name">{this.state.title}</div>
                            <div className = "type">
                                <span className = "sub">Type : </span>
                                <span className = "val">{this.state.tag}</span>
                            </div>
                            <div className = "type">
                                <span className = "sub">Price : </span>
                                <span className = "val">{this.state.price} coins</span>
                            </div>
                            <div className = "type">
                                <span className = "sub">Copies Sold : </span>
                                <span className = "val">{this.state.cs}</span>
                        </div>
                        <div className = "type">
                            <span className = "sub">Earnings : </span>
                            <span className = "val">{this.state.earnings_pcopy} coins</span>
                        </div>
                      </div>
                      </div>
                      <div className = "slider" onClick = {async() => {
                    
                        if(this.state.num < this.state.my_pro_list.length -1){
                        await this.setState((prevState) => {
                            return{
                                num : prevState.num + 1
                            }
                        } )

                        await this.imageHandler()
                    }
                    }}  >
                         <img src = {next} alt = " " />
                      </div>
                    </div>

                    <div>
                        <Transaction 
                        username = {this.state.username}
                        />
                    </div>

                   

            </div>
        )
    }
} 


class Info extends React.Component{
    render(){
        return(
            <div className = "info_bars_cols">
                    <div className = "info_ear_card">
                        <div className = "left">
                            <div>
                                <img src = {customer} alt = " " />
                            </div>
                            <div className = "data">
                                <span className = "num">{this.props.m_cop > 0 ? this.props.m_cop : '0'}</span>
                                <br/>
                                <span className = "name">Copies Sold</span>
                            </div>
                        </div>
                        <div className = "right">
                            <img src = {up_arrow} alt = "" />
                            <span>40.5%</span>
                        </div>
                    </div>
                    <div className = "info_ear_card">
                        <div className = "left">
                            <div>
                                <img src = {earnings} alt = " " className = "ear_img" />
                            </div>
                            <div className = "data">
                                <span className = "num">{this.props.m_ear}</span>
                                <br/>
                                <span className = "name">Earnings</span>
                            </div>
                        </div>
                    <div className = "right">
                        <img src = {up_arrow} alt = "" />
                        <span>60.5%</span>
                    </div>
                    </div>
                    <div className = "info_ear_card">
                        <div className = "left">
                            <div>
                                <img src = {products} alt = " " className = "ear_img" />
                            </div>
                            <div className = "data">
                                <span className = "num">{this.props.m_pro > 0 ? this.props.m_pro : '0'}</span>
                                <br/>
                                <span className = "name">Products</span>
                            </div>
                        </div>
                            <div className = "right">
                            <img src = {up_arrow} alt = "" />
                                <span>80.5%</span>
                            </div>
                        </div>
             </div>
        )
    }
}

class Transaction extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			total_trans: []
		};

		fetch('/api/user/transaction')
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					this.setState(() => {
						return {
							total_trans: data.reverse()
						};
					});
				}
			});
	}

	render() {
		return (
            <div className = "trans_earnings">
                <div className="trans_details">
                         <div>
                             <h1>Transactions({this.state.total_trans.length})</h1>
                         </div>
                         <div className = "details_fix_head">
                            <div className="trans_date">Date</div>
                            <div className="trans_transaction">Transaction ID</div>
                            <div className="trans_product_head">Product</div>
                            <div className="trans_Value_head">Value</div>
                        </div>
                </div>
                <div className="transaction">
                
                    {this.state.total_trans.map((trans) => {
                        return (
                            <div className="details_fix_head">
                                <div className="trans_date">{trans.date}</div>
                                <div className="trans_transaction">{trans.TransactionId}</div>
                                <div className="trans_product">{trans.item.title}</div>
                                <div className="trans_Value">
                                    {trans.Seller === this.props.username ? (
                                        <div className="trans_plus">+{trans.Value} coins</div>
                                    ) : (
                                        <div className="trans_minus"> -{trans.Value}coins</div>
                                    )}
                </div>
                
                            </div>
                        )
                    })}

                    {this.state.total_trans.map((trans) => {
                        return (
                            <div className="trans_details_mob">
                                <div className="trans_product_mob">{trans.item.title}</div>
                                <div className="trans_row">
                                    <div className="trans_Value_mob">
                                        {trans.Seller === this.props.username ? (
                                            <div className="trans_plus">+{trans.Value}coins</div>
                                        ) : (
                                            <div className="trans_minus_mob"> -{trans.Value}coins</div>
                                        )}
                                    </div>
                                    <div className="trans_date_mob">2020-06-13</div>
                                </div>
                            </div>
                        );
            })}
        
        </div>
      </div>
      
		);
	}
}