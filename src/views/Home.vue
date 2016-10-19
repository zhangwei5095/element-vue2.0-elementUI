<template>
	<div id="home">
		<siteheader />
		<router-view></router-view>
		<sitefooter />
	</div>
</template>
<script>
	import Sitefooter from '../components/Sitefooter'
	import Siteheader from '../components/Siteheader'
	export default {
		name: 'home',
		components: {
			Sitefooter,
			Siteheader
		}
	}
</script>