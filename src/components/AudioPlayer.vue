<template>
	<div class="player">
		<div class="player__wrapper">
			<ul class="player__timer">
				<li>{{ seeked }}</li>
				<li>{{ totalDuration }}</li>
			</ul>

			<div id="audio-bar" class="audio-bar" @click="handleBar">
				<span :style="{ width: (progress * 100) + '%' }"></span>
			</div>
			
			<h4 class="audio-title"> {{ index + 1 }} - {{ title }} - {{ date }}</h4>

			<div class="player__controls">
				<a href="#" @click.prevent="stepBackward"><i class="fa fa-step-backward" aria-hidden="true"></i></a>
				<a href="#" @click.prevent="seekBackward">-10s</a>
				<a href="#" @click.prevent="togglePlayback"><i class="fa" :class="playing ? 'fa-pause' : 'fa-play'" aria-hidden="true"></i></a>
				<a href="#" @click.prevent="seekFordward">+30s</a>
				<a href="#" @click.prevent="stepForward" @click><i class="fa fa-step-forward" aria-hidden="true"></i></a>
			</div>
		</div>
	</div>
</template>

<script>
	import VueHowler from 'vue-howler';

	export default {
		mixins: [VueHowler],
		props: ['title', 'date', 'index'],
		watch: {
			'sources': 'sourcesChanged'
		},
		methods: {
			timeFormated(totalSeconds) {
				let hours = Math.floor(totalSeconds / 3600);
				let minutes = Math.floor(totalSeconds % 3600 / 60);
				let seconds = Math.floor(totalSeconds % 3600 % 60);

				return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
			},
			handleBar(e) {
				let audioBar = document.getElementById('audio-bar');
				let barWidth = audioBar.offsetWidth;
				let barX = e.pageX;
				let percent = barX / barWidth;
				let seekPosition = Math.ceil(this.duration * percent);
				this.setSeek(seekPosition);
			},
			seekFordward() {
				let currentseconds = this.seek;
				this.setSeek(currentseconds + 30);
			},
			seekBackward() {
				let currentseconds = this.seek;
				this.setSeek(currentseconds - 10);
			},
			stepBackward() {
				this.$emit('backward');
			},
			stepForward() {
				this.$emit('forward');
			},
			sourcesChanged() {
				this.play();
			}
		},
		computed: {
			totalDuration() {
				let totalSeconds = this.duration;
				return this.timeFormated(totalSeconds);
			},
			remaining() {
				let remainingSeconds = this.duration - this.seek;
				return this.timeFormated(remainingSeconds);
			},
			seeked() {
				let seekedSeconds = this.seek;
				return this.timeFormated(seekedSeconds);
			}
		}
	}
</script>

<style lang="scss">
	.player {
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #fff;
	}

	.player__timer {
		padding: 0 3px;
		list-style: none;
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		margin: 0.2rem 0;
	}

	.player__controls {
		width: 100%;
		max-width: 320px;
		margin: 60px auto 0;
		height: 50px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		a {
			width: 40px;
			text-align: center;
		}
	}

	.audio-title {
		margin-top: 20px;
		line-height: 20px;
		transform:translateX(100%);
		animation: example1 15s linear infinite;
		width: 150%;
		max-width: 480px;
		position: absolute;
		font-size: 0.75rem;
		text-align: center;
	}

	@keyframes example1 {
	 0%   { 
	 	transform: translateX(100%); 		
	 }

	 100% { 
	 	transform: translateX(-100%); 
	 }
	}

	.audio-bar {
		width: 100vw;
		height: 14px;
		position: absolute;
		left:0;
		background-color: lightgrey;
		span {
			display: block;
			height: 100%;
			position: relative;
			overflow: hidden;
			background-color: #3069c7;
		}
	}
</style>