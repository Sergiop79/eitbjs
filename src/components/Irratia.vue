<template>
	<div v-if="loading">
		<loader></loader>
	</div>
	<div v-else-if="error">
		<error></error>
	</div>
	<div v-else class="content">
		<input type="search" placeholder="Irrati saioak filtratu" @input="this.handleFilter" class="input__filter">	
		<ul class="list">
			<router-link v-for="list in filteredLists" tag="li" :to="`/irratia/zerrenda/${list.id64}`" :key="list.id" :title="list.title" class="list__item">
				
				<a>
					<span><i class="fa fa-volume-up" aria-hidden="true"></i></span>
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
				radioLists: []
			}
		},
		created() {
			this.getRadioLists();
		},
		watch: {
			'$route': 'getRadioLists'
		},
		components: {Loader, Error},
		props: ['title'],
		methods: {
			getRadioLists() {
				axios.get('https://crossorigin.me/http://still-castle-99749.herokuapp.com/radio')
					.then((response) => {
						this.loading = false;
						this.radioLists = response.data.member
							.map(list => {
								return {
									 title: list.title,
									 id: list['@id'],
									 id64: btoa(list['@id']),
									 type: 'radio'
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
				return this.radioLists.filter(list => {
					return list.title.toLowerCase().includes(this.filter.toLowerCase());
				});
			}
		}
	}
</script>