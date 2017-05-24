<template>
	<div v-if="loading">
		<loader></loader>
	</div>
	<div v-else-if="error">
		<error></error>
	</div>
	<div v-else class="content">
		<input type="search" placeholder="Telebista saioak filtratu" @input="this.handleFilter" class="input__filter">	
		<ul class="list">
			<router-link v-for="list in filteredLists" tag="li" :to="`/telebista/zerrenda/${list.id64}`" :key="list.id" class="list__item">
				
				<a>
					<span><i class="fa fa-play-circle-o" aria-hidden="true"></i></span>
					<span>{{ list.title }}</span>
				</a>
			</router-link>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios';
	import Loader from './Loader.vue';
	import Error from './Error.vue';

	export default {
		data() {
			return {
				filter: '',
				loading: true,
				error: null,
				tvLists: []
			}
		},
		created() {
			this.getTvLists();
		},
		watch: {
			'$route': 'getTvLists'
		},
		components: {Loader, Error},
		methods: {
			getTvLists() {
				axios.get('https://crossorigin.me/http://still-castle-99749.herokuapp.com/playlist')
					.then((response) => {
						this.loading = false;
						this.tvLists = response.data.member
							.map(list => {
								return {
									 title: list.title,
									 id: list['@id'],
									 id64: btoa(list['@id']),
									 type: 'tv'
								}
							});
					})
					.catch((error) => {
						this.loading = false
						this.error = error;
						console.log(error);
					});
			},
			handleFilter(e) {
				setTimeout(() => this.filter = e.target.value, 500);
			}
		},
		computed: {
			filteredLists() {
				return this.tvLists.filter(list => {
					return list.title.toLowerCase().includes(this.filter.toLowerCase());
				});
			}
		}
	}
</script>

<style lang="scss">
	.input__filter {
		border: 1px solid grey;
		padding: 0.5em;
		width: 80%;
		display: block;
		margin: 17px auto 40px;

	}

	.list {
		list-style: none;
		padding: 0;
		margin-left: -10px;
		margin-top: -10px;
		display: flex;
		flex-wrap: wrap;
	}

	.list__item {
		border: 1px solid rgba(grey, 0.5);
		border-radius: 3px;
		margin-bottom: 10px;
		margin-left: 10px;
		flex: 1 0 100%;
		align-items: center;
		background-color: #fff;
		a {
			display: flex;
			align-items: center;
			color: grey;
			height: 100px;

			span:first-child {
				font-size: 2em;
				padding: 0.2em;
			}
		}
	}



	@media (min-width: 800px) {
	  .list__item {
	    max-width: calc(50% - 10px);
	  }
	}
	
	@media (min-width: 1200px) {
	  .list__item {
	    max-width: calc(33.33333% - 10px);
	  }
	}
	
	@media (min-width: 1300px) {
	  .list__item {
	    max-width: calc(25% - 10px);
	  }
	}


	.fade-enter-active, .fade-leave-active {
    	transition: opacity .5s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
		opacity: 0
	}
</style>