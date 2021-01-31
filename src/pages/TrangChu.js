import React, { Component } from "react";

class TrangChu extends Component {
	render() {
		return (
			<div>
				<div id="wrapper">
					<div id="header">
						<ul>
							<li><a className="active" href="/TrangChu">Trang chủ</a></li>
							<li><a href="/Bus">Bus</a></li>
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
							<p>Chúng tớ là sinh viên BK</p>
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
}
export default TrangChu;


