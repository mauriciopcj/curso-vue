<template>
	<v-app>
		<menu-vue />

		<navbar-vue />

		<carrosel-vue />

		<footer-vue />
	</v-app>
</template>

<script>
import Carrosel from '@/components/widgets/Carrosel.vue'
import Footer from '@/components/template/Footer.vue'
import NavBar from '@/components/template/NavBar.vue'
import Menu from '@/components/template/Menu.vue'

export default {
	components: { 'menu-vue': Menu, 'navbar-vue': NavBar,
		'carrosel-vue': Carrosel, 'footer-vue': Footer }
}
</script>