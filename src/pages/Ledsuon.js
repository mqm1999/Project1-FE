import React, { Component } from "react";

class Ledsuon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			listLed: []
		}




	}

	async componentDidMount() {
		await this.getLed()
	}



	render() {

		const { listLed } = this.state;
		return (
			<div>
				<div id="wrapper">
					<div id="header">
						<ul>
							<li><a href="/">Trang chủ</a></li>
							<li><a href="/Bus">Bus</a></li>
							<li><a href="/Route">Tuyến Bus</a></li>
							<li><a href="/Leddiemdung">Led điểm dừng</a></li>
							<li><a href="/Ledsau">led sau</a></li>
							<li><a className="active" href="/Ledsuon">led sườn</a></li>
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
							<caption>LED sườn</caption>
							<thead>
								<tr>
									<th>ID LED</th>
									<th>Mã sản phẩm</th>
									<th>NCC</th>
									<th>KT</th>
									<th>D</th>
									<th>R</th>
									<th>Ngày bảo dưỡng</th>
									<th>Thời gian bảo hành</th>
									<th>Thời gian còn lại</th>
								</tr>


							</thead>

							{listLed.map((Led) => (
								<tbody >
									<tr>
										<td style={{ fontWeight: 400 }}>{Led.id_ledSuon} </td>
										<td style={{ fontWeight: 400 }}>{Led.ma_sp}</td>
										<td style={{ fontWeight: 400 }}>{Led.ncc}</td>
										<td style={{ fontWeight: 400 }}>{Led.kt}</td>
										<td style={{ fontWeight: 400 }}>{Led.d}</td>
										<td style={{ fontWeight: 400 }}>{Led.r} </td>
										<td style={{ fontWeight: 400 }}>{Led.ngay_BD} </td>
										<td style={{ fontWeight: 400 }}>{Led.tg_BH} </td>
										<td style={{ fontWeight: 400 }}>{Led.tg_con_lai} </td>

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

	async getLed() {
		const res = await fetch('http://localhost:8080/ledsuon/all?sortType=1', {
			method: "get",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
			},
		})
		const resData = await res.json()

		this.setState({
			listLed: resData.data,
		});

	};


}
export default Ledsuon;


