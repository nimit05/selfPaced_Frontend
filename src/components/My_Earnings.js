import React from 'react'
import { Line } from "react-chartjs-2";
import customer from '../img/customer.svg'
import up_arrow from '../img/up-arrow.svg'
import earnings from '../img/earnings.svg'
import products from '../img/products.svg'

export default class Earnings extends React.Component{
    render(){
        let data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "Earnings",
                backgroundColor: '#DAF1D5',
                borderColor: "#34866B",
                data: [0, 10, 5, 2, 20, 30, 45],
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
                                <span className = "num">236</span>
                                <br/>
                                <span className = "name">New Clients</span>
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
                                <span className = "num">1000</span>
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
                                <span className = "num">12</span>
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
                        <Line data={data} options={{ maintainAspectRatio: true }} />
                      </div>
                      <div className = "right_gp">
                        <div className = "head">This Week</div>
                            <Info />
                      </div>
                    </div>

                    <div>
                        <Transaction />
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
                                <span className = "num">26</span>
                                <br/>
                                <span className = "name">New Clients</span>
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
                                <span className = "num">500</span>
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
                                <span className = "num">5</span>
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
  
      fetch("/api/user/transaction")
        .then(res => res.json())
        .then(data => {
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
        <div className="transaction">
          <h1>Transactions({this.state.total_trans.length})</h1>
          <h3>Latest Transaction</h3>
          <div className="trans_details">
            <div className="trans_date">Date</div>
            <div className="trans_product_head">Product</div>
            <div className="trans_Value_head">Value</div>
          </div>
          {this.state.total_trans.map(trans => {
            return (
              <div className="trans_details">
                <div className="trans_date">2020-06-13</div>
                <div className="trans_product">{trans.item.title}</div>
                <div className="trans_Value">
                  {trans.Debited ? (
                    <div className="trans_minus">-{trans.Value} coins</div>
                  ) : (
                    <div className="trans_plus"> +{trans.Value}coins</div>
                  )}
                </div>
              </div>
            );
          })}
  
          {this.state.total_trans.map(trans => {
            return (
              <div className="trans_details_mob">
                <div className="trans_product_mob">{trans.item.title}</div>
                <div className="trans_row">
                  <div className="trans_Value_mob">
                    {trans.Debited ? (
                      <div className="trans_minus_mob">-{trans.Value}coins</div>
                    ) : (
                      <div className="trans_plus"> +{trans.Value}coins</div>
                    )}
                  </div>
                  <div className="trans_date_mob">2020-06-13</div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }