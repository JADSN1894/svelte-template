<script lang="ts">
	//* States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	import Chart from 'chart.js/auto';

	$effect(() => {
		const entrypointElement = document.getElementById(
			'canvas-analytics-sales-graph'
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

	$effect(() => {
		const entrypointElement = document.getElementById(
			'canvas-analytics-note-of-orders-graph'
		)! as HTMLCanvasElement;

		const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

		new Chart(entrypointElement, {
			type: 'bar',
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

	pageTitleState.pageTitle = 'Analytics';
</script>

<div class="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
		<div class="text-xl font-semibold">Sales</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<canvas id="canvas-analytics-sales-graph"></canvas>
		</div>
	</div>
	<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
		<div class="text-xl font-semibold">No of Orders</div>
		<div class="divider mt-2"></div>
		<div class="h-full w-full pb-6 bg-base-100">
			<canvas id="canvas-analytics-note-of-orders-graph"></canvas>
		</div>
	</div>
</div>
