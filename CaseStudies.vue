<template>
	<section class="casestudies-section">
		<LinkPoint :destination="'casestudies'"/>
		<SectionTitle>
			<h2>導入事例</h2>
		</SectionTitle>
		<div class="case-study-article-container">
			<template v-for="(article, idx) in articles">
				<CaseStudyArticle
					:key="idx"
					:idx="idx"
					:img = article.img
					:title = article.title
					:company-name = article.companyName
					:company-logo = article.companyLogo
					:detail = article.detail
					:router-link-company-name = article.routerLinkCompanyName
				/>
			</template>
		</div>
	</section>
</template>

<script>
import SectionTitle from '@/components/LP/atoms/SectionTitle'
import CaseStudyArticle from '@/components/LP/atoms/CaseStudyArticle'
import LinkPoint from '@/components/LP/atoms/LinkPoint'

export default {
	name: 'CaseStudies',
	components: {
		SectionTitle,
		CaseStudyArticle,
		LinkPoint
	},
	data () {
		const articles = [
			{
				img: require("@/assets/lp/kinoshitanokaigo.png"),
				title: '人事が定時で帰れるシステム<br>（自動化・代行化）',
				companyName: '木下グループ',
				companyLogo: require("@/assets/lp/logo_kinoshita-kaigo.png"),
				detail: '求人媒体の担当者の方からご紹介をいただきました。求人を掲載しているサイトの応募がどのくらいで、面接設定とか歩留まりみたいな話をしている中で、なかなか応募が入っても歩留まりがよくない。応募の進捗をもっと上げていければという話をしている中で、このサービスであればこういう風にできますよとご紹介していただいたのがきっかけです。...',
				routerLinkCompanyName: "kinoshitanokaigo"
			},
			{
				img: require("@/assets/lp/medicalcareservice.png"),
				title: '外国人採用の一次対応やスクリーニングをロボにより自動化',
				companyName: 'メディカル・ケア・サービス株式会社',
				companyLogo: require("@/assets/lp/mcs_logo.jpg"),
				detail: 'ホームページに日本人向けの応募フォームしかなかったので、外国の方からはメッセージ機能のように使われていました。応募のフォームではあるのですが、そこでご自分の希望等をお伝えくださる、ということが多かったです。ちょうどHRモンスターを入れる前くらいが、外国人の方向けの記事をホームページに設置したこともあり、その記事を読んだ方たちの問い合わせが当時すごく多かったので、当時は手が回っていませんでした。...',
				routerLinkCompanyName: "medicalcareservice"
			},
		]
		return {
			articles
		}
	}
}
</script>

<style lang="scss" scoped>
.casestudies-section {
	position: relative;
}
.case-study-article-container {
	width: 95%;
	margin: auto;
}
</style>