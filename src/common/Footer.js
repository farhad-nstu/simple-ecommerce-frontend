import React, { Component } from 'react';
import axios from 'axios';



export default class Footer extends Component {

	render() {
		return (
			<div>
				
				<footer className="footer py-4">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-4 text-lg-left"></div>
							<div class="col-lg-4 text-lg-left">All rights reserved to Mohammad Farhad</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}