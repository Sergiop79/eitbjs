<template>
	<div class="content home">
		<article class="links">
		<figure class="logo">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 623.76367 300">
			  <g fill="#3069c7" transform="matrix(1.2963 0 0 1.2963 -146.998 -162.082)">
			    <ellipse cx="204.366" cy="170.827" rx="15.883" ry="15.698"/>
			    <path d="M259.005 136.293c1.06-2.424 7.38-7.644 4.877-10.26-3.05-1.332-6.55.4-9.586 1.178l-8.24 2.356-10.597 2.69-10.428 3.028c-15.478 2.182-12.27 12.862 3.363 19.51l18.67 13.118c16.058 12.018 28.658 25.698 41.036 41.205l8.242 15.81c10.876 27.19.304 53.86-16.65 73.16-19.293 25.528-42.044 25.764-30.946 45.41 15.443 27.34 40.978 3.21 48.898-10.8 8.214-14.532 26.907-59.8 27.12-77.16l.17-13.624-1.85-13.96-4.542-13.622-5.886-11.268-6.39-10.427-9.42-11.605-6.727-7.232-8.242-7.905-7.736-6.895-6.896-6.055-5.718-5.045c-3.627-3.192-4.657-6.686-2.523-11.605zM187.694 234.177c-23.46 4.553-67.105 25.227-67.105 25.227-6.785 4.15-7.682 9.98-5.888 16.82 1.818 4.458 3.7 9.62 7.188 11.92 1.964 1.298 4.2 5.166 11.65 1.365 0 0 50.436-23.602 74.505-38.01 1.825-1.093 2.654-4.025 2.018-6.055-1.904-6.077-9.238-9.5-15.305-11.437-2.244-.716-4.75-.28-7.064.17z" fill-rule="evenodd" stroke="#3069c7"/>
			    <path d="M144.512 308.06l95.384-53.363c1.378-.696 3.05-.78 4.492-.227.945.363 1.787.99 2.405 1.79.618.803 1.01 1.777 1.12 2.783.926 4.59.975 9.354.142 13.962-.52 2.874-1.44 5.718-3.096 8.123-1.658 2.406-4.03 4.21-6.458 5.834l-75.38 50.492c-1.68 1.124-3.4 2.228-5.312 2.878-1.912.65-3.993.828-5.972.425-1.98-.402-3.823-1.368-5.376-2.66-1.553-1.29-2.825-2.887-3.965-4.555-2.667-3.9-4.732-8.432-4.622-13.156.112-4.842 2.656-9.567 6.637-12.326z" fill-rule="evenodd" stroke="#3069c7" stroke-width=".997"/>
			  </g>
			  <path fill="#3069c7" d="M323.764 0h300v300h-300z"/>
			  <path d="M525.287 234.376c6.043 9.867 13.905 17.12 27.81 17.12 11.68 0 19.143-5.84 19.143-13.906 0-9.666-7.667-13.09-20.524-18.714l-7.048-3.024c-20.342-8.666-33.857-19.523-33.857-42.476 0-21.143 16.11-37.238 41.287-37.238 17.924 0 30.81 6.238 40.095 22.572l-21.952 14.095c-4.833-8.667-10.048-12.08-18.143-12.08-8.257 0-13.49 5.237-13.49 12.08 0 8.457 5.238 11.88 17.333 17.12l7.047 3.018c23.953 10.27 37.477 20.743 37.477 44.286 0 25.38-19.938 39.284-46.715 39.284-26.182 0-43.096-12.476-51.372-28.828zm-99.585 2.443c4.428 7.856 8.457 14.5 18.143 14.5 9.262 0 15.104-3.625 15.104-17.715v-95.857h28.19v96.238c0 29.19-17.114 42.476-42.095 42.476-22.572 0-35.643-11.68-42.29-25.75z" fill="#fff"/>
			</svg>
		</figure>
			<p><router-link to="/telebista" class="btn">Telebista saioak ikusi</router-link></p>
			<p><router-link to="/irratia" class="btn">Irrati saioak entzun</router-link></p>
		</article>
		<article class="authors">
			<p><a href="https://twitter.com/Sergixnet">Sergio Peña-k</a> sortuta</p>
			<p><a href="https://twitter.com/erralin">Mikel Larreategi-k</a> garatutako <a href="https://erral.github.io/eitbapi/#/">Eitb API-ari</a> esker</p>
			<p>Kodea <i class="fa fa-github" aria-hidden="true"></i> <a href="https://github.com/Sergiop79/eitbjs">githuben eskuragarri</a></p>
		</article>
	</div>
</template>
<style lang="scss">

	.home {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.logo {
		margin: 0 auto 2rem;
		width: 200px;
	}

	.links {
		text-align: center;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.btn.btn {
		background-color: #3069c7;
		display: inline-block;
		width: 100%;
		max-width: 300px;
		color: white;
		font-weight: 800;
		line-height: 3em;
		border-bottom: 5px solid #5389e2;
	}

	.authors {
		font-size: 0.8rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		p {
			margin: 0 0 0.5rem 0;
		}
	}
</style>