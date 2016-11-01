import React from 'react'
import ReactDOM from 'react-dom'

const app = function() {

	const Page = React.createClass({
		render: () => {
			return (
				<div className="Page">
					<Header />
					<Body />
				</div>
				)
		}
	})

	var Header = React.createClass({
		render: function() {
			return (
				<div className="header">
					<img src="http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
					<img className="logoImg" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
				</div>
				)
		}
	})

	var Body = React.createClass({
		render: function() {
			return (
				<div className="body">
					<div className="bodyLeft">
						<input />
						<p>The Iron Yard Houston</p>
						<p>Happenings and Updates from the Iron Yard in Houston Tx</p>
					</div>
					<div className="bodyRight">
						<h3>September 22 Starts a new class of Iron Yard Houston students</h3>
						<p>By Brian Dorton, Campus Director at the Iron Yard Houston</p>
						<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
						<p>The and that a some redid more crud gosh reflectively well hello much miraculous this or joyfully indescribably far much sheep so far rancorously whale. Jeez less instead overcast or and and a that aural empirically or dependently nodded customary
            the wow woodpecker beat judicious through gosh one. More selfless yet unbound lecherously labrador telling underwrote gawked yikes however smiled aimless jeez as yikes abiding therefore boisterous eccentric where a bridled spent made concurrent
            sore more jeez firefly. Chuckled and devoted hyena or much punctilious forsook regardless far nastily a elegant yellow up however far far and far despite until cuckoo pending maladroit darn. Depending as and bitterly hey orca hiccupped numbly
            up much amongst python and bound ouch pushed excluding and that much outside behind roadrunner and and voally anteater. The and that a some redid more crud gosh reflectively well hello much miraculous this or joyfully indescribably far much sheep so far rancorously whale. Jeez less instead overcast or and and a that aural empirically or dependently nodded customary
            the wow woodpecker beat judicious through gosh one. More selfless yet unbound lecherously labrador telling underwrote gawked yikes however smiled aimless jeez as yikes abiding therefore boisterous eccentric where a bridled spent made concurrent
            sore more jeez firefly. Chuckled and devoted hyena or much punctilious forsook regardless far nastily a elegant yellow up however far far and far despite until cuckoo pending maladroit darn. Depending as and bitterly hey orca hiccupped numbly</p>
					</div>
				</div>
				)
		}
	})

	ReactDOM.render(<Page />,document.querySelector('.container'))
}

app()  