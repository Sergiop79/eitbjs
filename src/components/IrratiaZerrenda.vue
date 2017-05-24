<template>
	<div v-if="loading">
		<loader></loader>
	</div>
	<div v-else-if="error">
		<error></error>
	</div>
	<div v-else class="content irratia">
		<audio-player :sources="[currentAudio.url]" :key="currentAudio.url" :title="currentAudio.title" :date="currentAudio.date" :index="audioIndex" @forward="stepForward" @backward="stepBackward"></audio-player>		
		<ol class="irratia-list">
			<li v-for="audio in radioList" class="irratia-list__item"><a class="irratia-list__link" :href="audio.url" @click.prevent="setCurrentAudio">{{ audio.title }}</a></li>
		</ol>
	</div>
</template>

<script>
	import axios from 'axios';
	import Loader from './Loader.vue';
	import Error from './Error.vue';
	import AudioPlayer from './AudioPlayer.vue';

	export default {
		data() {
			return {
				loading: true,
				error: null,
				id: atob(this.$route.params.id64),
				radioList: [],
				type: 'radio',
				currentAudio: null,
				audioIndex: 0
			}
		},
		created() {
			this.getRadioList()
		},
		watch: {
			'$route': 'getRadioList'
		},
		components: {Loader, Error, AudioPlayer},
		methods: {
			getRadioList() {
				axios.get(`https://crossorigin.me/${this.id}`)
					.then(response => {
						this.loading = false;
						this.radioList = response.data.member.map(audio => {
							return {
								title: audio.title,
								date: audio.date,
								url: audio.url
							};
						});

						this.currentAudio = this.radioList[0];
					})
					.catch((error) => {
						this.loading = false
						this.error = error;
						console.log(error);
					});
			},
			setCurrentAudio(e) {
				let index = this.getNodeIndex(e.target.parentNode);
				this.audioIndex = index;
				this.currentAudio = this.radioList[index];
			},
			setCurrentAudioFromIndex(index) {
				this.currentAudio = this.radioList[index];
			},
			getNodeIndex(node) {
				var index = 0;
			    while ( (node = node.previousSibling) ) {
			        if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
			            index++;
			        }
			    }
			    return index;
			},
			stepForward() {
				let length = this.radioList.length;
				
				this.audioIndex += 1;

				let index = this.audioIndex;

				if (index >= length) {
					index = this.audioIndex = 0;
				}

				this.currentAudio = this.radioList[index];
			},
			stepBackward() {
				let length = this.radioList.length;

				let index = this.audioIndex;

				if (index == 0) {
					index = this.audioIndex = length - 1;
				} else {
					this.audioIndex -= 1;
					index = this.audioIndex;
				}

				this.currentAudio = this.radioList[index];
			}
		}
	}
</script>

<style lang="scss">
	.irratia {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: 20px;
		margin-bottom: 150px;
	}

	.irratia-list {
		padding-left: 5px;
		width: 80%;
		margin: 0 auto;
	}

	.irratia-list__item {
		margin-bottom: 10px;
		font-size: 0.95rem;
	}
</style>