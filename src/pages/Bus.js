﻿import React, { Component } from "react";

class Bus extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listBus: []
		}
		

		//this.getBus();
		
	}

		async componentDidMount() {
		await this.getBus()
	}



	render() {
		
		const { listBus } = this.state;
		return (
			<div>
				<div id="wrapper">
					<div id="header">
						<ul>
							<li><a href="/">Trang chủ</a></li>
							<li><a className="active" href="/Bus">Bus</a></li>
							<li><a href="/Route">Tuyến Bus</a></li>
							<li><a href="/Leddiemdung">Led điểm dừng</a></li>
							<li><a href="/Ledsau">led sau</a></li>
							<li><a href="/Ledsuon">led sườn</a></li>
							<li><a href="/Ledtrong">led trong</a></li>
							<li><a href="/Ledtruoc">led trước</a></li>
							<li><a href="#">Báo cáo</a></li>
						</ul>


					</div>

					<div className="image-section">
						<img src="./images/nen2.jpg" alt="Ảnh nền" />
					</div>

					<div id="content-section">
						<form>
							<input type="text" name="search" placeholder="Search..." />
						</form>
							<table>
								<caption>Xe Bus</caption>
								<thead>
									<tr>
										<th>BKS</th>
										<th>TT</th>
										<th>Tuyến</th>
										<th>Năm sản xuất</th>
										<th>Năm lắp LED</th>
									</tr>
									

								</thead>
							
								{listBus.map((Bus) => (
								<tbody >
									<tr> 
										<td style={{ fontWeight: 400 }}>{Bus.bks} </td>
										<td style={{ fontWeight: 400 }}>{Bus.tt}</td>
										<td style={{ fontWeight: 400 }}>{Bus.tuyen}</td>
										<td style={{ fontWeight: 400 }}>{Bus.nam_SX}</td>
										<td style={{ fontWeight: 400 }}>{Bus.nam_Lap_led}</td>
								
									</tr>
								</tbody>
								))}
										
							
							
							</table>	
					</div>
				</div>

				<div id="footer">
					<p>Follow Us</p>
					<div className="socials-list">
						<a href=""><i className="ti-facebook"></i></a>
						<a href=""><i className="ti-instagram"></i></a>
						<a href=""><i className="ti-twitter"></i></a>
					</div>
					<p>Copyright 2020 by </p>
					<div className="logo-content">
						<p>Hust Bus</p>
					</div>
				</div>

			</div>
		)
	}
	
	async getBus()  {
		const res = await fetch('http://localhost:8080/bus/all?sortType=1', { 
			method: "get",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
			},
		})
		const resData = await res.json()
			
		this.setState({
					listBus: resData.data,
		});
		
	};

	//async getRoute() {
	//	const res = await fetch('https://localhost:8080/tuyenxe/all?sortType=1', {
	//		method: "get",
	//		headers: {
	//			accept: "application/json",
	//			"content-type": "application/json",
	//		},
	//	})
	//	const resData = await res.json()

	//	this.setRoutestate({
	//		listRoute: resData.data,
	//	});

	//};


	
	//deleteBus = (id) => {
	//	fetch("http://localhost:8080/api/Busneedadvice/get", {
	//		method: "delete",
	//		headers: {
	//			key = id,
	//		},
	//	})
	//		.then((res) => res.json())
	//		.then((res) => {
	//			this.setState({
	//				listBus: [...res],
	//			});
	//		});
	//}

	//getBus = () => {
	//	fetch("https://jsonplaceholder.typicode.com/posts", {
	//		method: "get",
	//		headers: {
	//			accept: "application/json",
	//			"content-type": "application/json",
	//		},
	//	})
	//		.then((res) => res.json())
	//		.then((res) => {
	//			this.setState({
	//				listBus: [...res],
	//			});
	//		});
	//};


	//{listBus.map((Bus) => (
	//	<tbody >
	//		<tr>
	//			<td style={{ fontWeight: 400 }}>{Bus.bks} </td>
	//			<td style={{ fontWeight: 400 }}>{Bus.tt}</td>
	//			<td style={{ fontWeight: 400 }}>{Bus.tuyen}</td>
	//			<td style={{ fontWeight: 400 }}>{Bus.nam_SX}</td>
	//			<td style={{ fontWeight: 400 }}>{Bus.nam_Lap_led}</td>
	//			<td><button onClick={() => this.deleteBus(Bus.bks)}> Delete </button>  <button><a href="/Edit/{Bus.bks}"> Edit </a></button> </td>
	//		</tr>
	//	</tbody>
	//))}


	// {listRoute.map((Route) => (

							//			<td style={{ fontWeight: 400 }}>{Route.}</td>
							//			<td style={{ fontWeight: 400 }}>{Route.}</td>
							//			<td style={{ fontWeight: 400 }}>{Route.}</td>
							//			<td style={{ fontWeight: 400 }}>{Route.}</td>
							//			<td style={{ fontWeight: 400 }}>{Route.}</td>

							//))}			

	//<td style={{ fontWeight: 400 }}>{Bus.nam_Lap_led}</td>	
	//<td><button > delete </button>  <button><a href={"/edit" + Bus.id}> edit </a></button> </td>

	//<th>Năm lắp led</th>
	//<th>Tuyến</th>
	//<th>Công ty</th>
	//<th>Đơn vị</th>
	//<th>Chủng loại</th>
	

	//<th>LED điểm dừng</th>
	//<th>LED trước</th>
	//<th>LED sườn</th>
	//<th>LED sau</th>
	//<th>LED trong</th>

	//<th> Fix </th>
}
export default Bus;


