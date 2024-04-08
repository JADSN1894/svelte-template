<script lang="ts">
	//* States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	import Chart from 'chart.js/auto';

	//* Sales
	const ANALYTICS_SALES_GRAPH_ID = 'canvas-analytics-sales-graph';
	$effect(() => {
		const entrypointElement = document.getElementById(
			ANALYTICS_SALES_GRAPH_ID
		)! as HTMLCanvasElement;
		const options = {
			responsive: true,
			scales: {
				x: {
					stacked: true
				},
				y: {
					stacked: true
				}
			}
		};

		const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

		new Chart(entrypointElement, {
			type: 'bar',
			options: options,
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Store 1',
						data: labels.map(() => {
							return Math.random() * 1000 + 500;
						}),
						backgroundColor: 'rgba(255, 99, 132, 1)'
					},
					{
						label: 'Store 2',
						data: labels.map(() => {
							return Math.random() * 1000 + 500;
						}),
						backgroundColor: 'rgba(53, 162, 235, 1)'
					},
					{
						label: 'Store 3',
						data: labels.map(() => {
							return Math.random() * 1000 + 500;
						}),
						backgroundColor: 'rgba(235, 162, 235, 1)'
					}
				]
			}
		});
	});

	//* No of orders
	const ANALYTICS_NOTE_OF_ORDERS_GRAPH_ID = 'canvas-analytics-note-of-orders-graph';
	$effect(() => {
		const entrypointElement = document.getElementById(
			ANALYTICS_NOTE_OF_ORDERS_GRAPH_ID
		)! as HTMLCanvasElement;

		const options = {
			responsive: true
		};

		const labels = ['India', 'Middle East', 'Europe', 'US', 'Latin America', 'Asia(non-india)'];

		new Chart(entrypointElement, {
			type: 'bar',
			options: options,
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Store 1',
						data: labels.map(() => {
							return Math.random() * 1000 + 500;
						}),
						backgroundColor: 'rgba(255, 99, 132, 1)'
					},
					{
						label: 'Store 2',
						data: labels.map(() => {
							return Math.random() * 1000 + 500;
						}),
						backgroundColor: 'rgba(53, 162, 235, 1)'
					}
				]
			}
		});
	});

	//* Orders by category
	const ANALYTICS_ORDERS_BY_CATEGORY_GRAPH_ID = 'canvas-analytics-orders-by-category-graph';
	$effect(() => {
		const entrypointElement = document.getElementById(
			ANALYTICS_ORDERS_BY_CATEGORY_GRAPH_ID
		)! as HTMLCanvasElement;

		const options = {
			responsive: true
		};

		const labels = ['Electronics', 'Home Applicances', 'Beauty', 'Furniture', 'Watches', 'Apparel'];

		new Chart(entrypointElement, {
			type: 'doughnut',
			options: options,
			data: {
				labels: labels,
				datasets: [
					{
						label: '# of Orders',
						data: [122, 219, 30, 51, 82, 13],
						backgroundColor: [
							'rgba(255, 99, 132, 0.8)',
							'rgba(54, 162, 235, 0.8)',
							'rgba(255, 206, 86, 0.8)',
							'rgba(75, 192, 192, 0.8)',
							'rgba(153, 102, 255, 0.8)',
							'rgba(255, 159, 64, 0.8)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}
				]
			}
		});
	});

	//* Orders by country
	const ANALYTICS_ORDERS_BY_COUNTRY_GRAPH_ID = 'canvas-analytics-orders-by-country-graph';
	$effect(() => {
		const entrypointElement = document.getElementById(
			ANALYTICS_ORDERS_BY_COUNTRY_GRAPH_ID
		)! as HTMLCanvasElement;

		const options = {
			responsive: true,
			scales: {
				y: {
					beginAtZero: true
				}
			}
		};

		const labels = ['India', 'Middle East', 'Europe', 'US', 'Latin America', 'Asia(non-india)'];

		new Chart(entrypointElement, {
			type: 'pie',
			options: options,
			data: {
				labels: labels,
				datasets: [
					{
						label: '# of Orders',
						data: [122, 219, 30, 51, 82, 13],
						backgroundColor: [
							'rgba(255, 99, 255, 0.8)',
							'rgba(54, 162, 235, 0.8)',
							'rgba(255, 206, 255, 0.8)',
							'rgba(75, 192, 255, 0.8)',
							'rgba(153, 102, 255, 0.8)',
							'rgba(255, 159, 255, 0.8)'
						],
						borderColor: [
							'rgba(255, 99, 255, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 255, 1)',
							'rgba(75, 192, 255, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 255, 1)'
						],
						borderWidth: 1
					}
				]
			}
		});
	});

	//* No of Orders by month (in k)
	const NO_OF_ORDERS_BY_MONTH_IN_K_ID = 'canvas-analytics-no-of-orders-by-month-in-k-graph';
	$effect(() => {
		const entrypointElement = document.getElementById(
			NO_OF_ORDERS_BY_MONTH_IN_K_ID
		)! as HTMLCanvasElement;

		const options = {
			responsive: true,
			fill: true,
			scales: {
				y: {
					beginAtZero: true
				}
			}
		};

		new Chart(entrypointElement, {
			type: 'scatter',
			options: options,
			data: {
				datasets: [
					{
						label: 'Orders > 1k',
						data: Array.from({ length: 100 }, () => ({
							x: Math.random() * 11,
							y: Math.random() * 31
						})),
						backgroundColor: 'rgba(255, 99, 132, 1)'
					},
					{
						label: 'Orders > 2K',
						data: Array.from({ length: 100 }, () => ({
							x: Math.random() * 12,
							y: Math.random() * 12
						})),
						backgroundColor: 'rgba(0, 0, 255, 1)'
					}
				]
			}
		});
	});

	//* Montly Active Users (in k)
	const MONTLY_ACTIVE_USERS_IN_K = 'canvas-analytics-montly-active-users-in-k-graph';
	$effect(() => {
		const entrypointElement = document.getElementById(
			MONTLY_ACTIVE_USERS_IN_K
		)! as HTMLCanvasElement;

		const options = {
			responsive: true,
			fill: true
		};

		const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

		new Chart(entrypointElement, {
			type: 'line',
			options: options,
			data: {
				labels: labels,
				datasets: [
					{
						// fill: true,
						label: 'MAU',
						data: labels.map(() => {
							return Math.random() * 100 + 500;
						}),
						borderColor: 'rgb(53, 162, 235)',
						backgroundColor: 'rgba(53, 162, 235, 0.5)'
					}
				]
			}
		});
	});

	pageTitleState.pageTitle = 'Analytics';
</script>

<div class="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
		<div class="text-xl font-semibold">Sales</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<canvas id={ANALYTICS_SALES_GRAPH_ID}></canvas>
		</div>
	</div>
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
		<div class="text-xl font-semibold">No of Orders</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<canvas id={ANALYTICS_NOTE_OF_ORDERS_GRAPH_ID}></canvas>
		</div>
	</div>
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
		<div class="text-xl font-semibold">Orders by Category</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<canvas id={ANALYTICS_ORDERS_BY_CATEGORY_GRAPH_ID}></canvas>
		</div>
	</div>
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
		<div class="text-xl font-semibold">Orders by Country</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<canvas id={ANALYTICS_ORDERS_BY_COUNTRY_GRAPH_ID}></canvas>
		</div>
	</div>

	<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
		<div class="text-xl font-semibold">No of Orders by month (in k)</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<canvas id={NO_OF_ORDERS_BY_MONTH_IN_K_ID}></canvas>
		</div>
	</div>
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
		<div class="text-xl font-semibold">Montly Active Users (in k)</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<canvas id={MONTLY_ACTIVE_USERS_IN_K}></canvas>
		</div>
	</div>
</div>
