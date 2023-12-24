interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'ClicExitoso', // Site author
	title: 'Guía Masculina para el Amor', // Site title.
	description: 'Toda la orientación que los hombres necesitan para navegar con éxito el mundo del amor y las relaciones. Descubre consejos de citas efectivas, estrategias para el desarrollo personal en el ámbito romántico, claves para mantener relaciones saludables y exploraciones en la psicología del amor. Encuentra tu camino hacia conexiones más significativas y relaciones duraderas con la guía experta para hombres en el amor.', // Description to display in the meta tags
	lang: 'es_US',
	ogLocale: 'es_US',
	shareMessage: 'Compartir', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
