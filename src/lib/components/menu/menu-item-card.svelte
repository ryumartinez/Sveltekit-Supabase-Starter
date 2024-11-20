<script>
	let {
		title = 'Mocha Cafe',
		description = 'Expreso',
		price = '4.53'
	} = $props();
</script>


<div class="bg-white rounded-lg shadow-sm">
	<img
		class="card-image rounded-lg"
		src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
		alt="Shoes" />
	<div class="card-text-area">
		<h2 class="card-text-title">{title}</h2>
		<p class="card-text-description">{description}</p>
		<div class="flex justify-between">
			<p class="card-text-price justify-self-start">{price} $</p>
			<button class="card-button rounded-lg justify-self-end">+</button>
		</div>
	</div>
</div>

<style>
	.card-image {
			width: 140px;
			height: 128px;
	}
	.card-text-area {
      width: 140px;
      height: 82px;
	}
	.card-text-title {
			font-family: Sora, sans-serif;
			font-size: 16px;
			font-weight: 600;
	}
	.card-text-description {
      font-family: Sora, sans-serif;
      font-size: 12px;
      font-weight: 400;
	}
	.card-text-price {
      font-family: Sora, sans-serif;
      font-size: 18px;
      font-weight: 600;
	}

	.card-button {
			height: 32px;
			width: 32px;
			background-color: #C67C4E;
	}

</style>