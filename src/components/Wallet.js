import React from 'react'

export default class Wallet extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                coins : null,
                earnings : null
            }
            fetch('/api/user').then((res) => res.json())
            .then((data) => {
                if(data){
                    this.setState(() => {
                        return {
                            coins : data.Coins,
                            earnings : data.Earnings
                        }
                    })
                }
            })
        }
    
    render(){
        return (
            <div>
                <div className = "wallet_page">
                    <div className  = "header-wallet">
                            <div className = "wallet_value">${this.state.coins} coins
                                <div className = "below_wallet_value">wallet</div></div>
                            <div className = "wallet_value">${this.state.earnings} coins
                                <div className = "below_wallet_value">Earnings</div></div>
                            <div className = "wallet_value add_wallet">Add 1000 coins to wallet
                                <div className = "below_wallet_value">
                                <div class='pm-button'>
                                    <a href='https://www.payumoney.com/paybypayumoney/#/9AC375731E013DB56B1D7644DBC3BDB2'><img src='https://www.payumoney.com/media/images/payby_payumoney/new_buttons/21.png' /></a></div> 
                        </div>
                        </div>
                    </div>
            
                </div>
                <Transaction />
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

		fetch('/api/user/transaction', {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache',
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer'
		})
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
			<div className="transaction_wallet">
				<h1>Transactions({this.state.total_trans.length})</h1>
				<h3>Latest Transaction</h3>
				<div className="trans_details">
					<div className="trans_date">Date</div>
					<div className="trans_transaction">Transaction ID</div>
					<div className="trans_product_head">Product</div>
					<div className="trans_Value_head">Value</div>
				</div>
				{this.state.total_trans.map((trans) => {
					return (
						<div className="trans_details">
							<div className="trans_date">2020-06-13</div>
							<div className="trans_transaction">{trans.TransactionId}</div>
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

				{this.state.total_trans.map((trans) => {
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