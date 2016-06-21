/**
 * Main JSX file.
 * 
 * (c) 2016. modsoussi.
 */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Nav = React.createClass({
	handleClick: function(e){
		return this.props.handleClick(e);
	},
	render: function(){
		return(
			<nav className="navbar navbar-light" style={{marginTop: 15, marginLeft: 25, marginRight: 25, fontSize: 20}}>
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#coll">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a href="#" style={{fontSize: 36}} onClick={this.handleClick}>
						modsoussi
					</a>
				</div>
				<div className="collapse navbar-collapse" id="coll">
					<ul className="nav navbar-nav">
						<li className="nav-item active" onClick={this.handleClick}>
							<a href="#" style={{marginLeft: 25, marginTop: 5}}>
								skillz
							</a>
						</li>
						<li className="nav-item active" onClick={this.handleClick}>
							<a href="#" style={{marginLeft: 25, marginTop: 5}}>
								projects
							</a>
						</li>
					</ul>
				
					<ul className="nav navbar-nav navbar-right hidden-xs">
						<li className="nav-item active">
							<a target="_blank" href="https://twitter.com/modsoussi">
								<g>
									<i className="fa fa-twitter"></i>
								</g>
							</a>
						</li>
						<li className="nav-item active">
							<a target="_blank" href="https://github.com/modsoussi">
								<g>
									<i className="fa fa-github"></i>
								</g>
							</a>
						</li>
						<li className="nav-item active">
							<a target="_blank" href="https://linkedin.com/in/mohameddsoussi">
								<g>
									<i className="fa fa-linkedin"></i>
								</g>
							</a>
						</li>
						<li className="nav-item active">
							<a href="#">
								<g>
									<i className="fa fa-envelope" style={{marginRight: 15}}></i>
								</g>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
});

var Content = React.createClass({
	render: function(){
		if(this.props.tab === "modsoussi"){
			return(
				<p>Hello there, friend! My name is Mohamed, and I go by Mo. I was born
				and raised in Bizerte, Tunisia, before life led me to a wonderful piece of
				land in western Massachussetts that people call the Purple Bubble, and there stood
				the top liberal arts college in the country, Williams College. In this bubble in the
				middle of the Berkshires, I majored in Physics and Computer Science and set out to change
				the world. My belief is that Humanity's future lies in its expansion outside of planet Earth.
				I'm only 24, and I'm going to do everything I can to see it happen in my lifetime. @elonmusk ;)
				For the time being I'm with <a href="http://daycationapp.com" target="_blank">
				Daycation</a>, all while I work on my aerospace engineering skills.
				</p>
			);
		} else if(this.props.tab === "skillz"){
			return(
				<h2> Hello, skillz! </h2>
			);
		} else return(
			<h2> Hello, projects! </h2>
		);
	}
});

var Body = React.createClass({
	render: function(){
		return(
			<ReactCSSTransitionGroup transitionName="jone" transitionEnterTimeout={500} transitionLeaveTimeout={0.01}>
				<div  key={this.props.tab} className="container">
					<div className="row">
						<div className="col-md-6 center-block">
							<Content tab={this.props.tab}/>
						</div>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
});

var Footer = React.createClass({
	render: function() {
		return(
			<nav className="navbar navbar-light navbar-static-bottom visible-xs" style={{margin: 10}}>
				<ul className="nav navbar-nav navbar-right">
					<li className="nav-item active">
						<a target="_blank" href="https://twitter.com/modsoussi">
							<g>
								<i className="fa fa-twitter"></i>
							</g>
						</a>
					</li>
					<li className="nav-item active">
						<a target="_blank" href="https://github.com/modsoussi">
							<g>
								<i className="fa fa-github"></i>
							</g>
						</a>
					</li>
					<li className="nav-item active">
						<a target="_blank" href="https://linkedin.com/in/mohameddsoussi">
							<g>
								<i className="fa fa-linkedin"></i>
							</g>
						</a>
					</li>
					<li className="nav-item active">
						<a href="#">
							<g>
								<i className="fa fa-envelope" style={{marginRight: 15}}></i>
							</g>
						</a>
					</li>
				</ul>
			</nav>
		);
	}
});

var Container = React.createClass({
	getInitialState: function(){
		return {tab: "modsoussi"};
	},
	handleClick: function(e){
		this.setState({tab: e.target.text});
	},
	render: function(){
		return(
			<div>
				<Nav handleClick={this.handleClick}/>
				<Body tab={this.state.tab}/>
				<Footer />
			</div>
		);
	}
});

ReactDOM.render(
	<Container />,
	document.getElementById("main")
);