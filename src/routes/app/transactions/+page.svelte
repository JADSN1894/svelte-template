<script>
	import FunelIcon from '$icons/hero-icons/FunelIcon.svelte';
</script>

<div class="card w-full p-6 bg-base-100 shadow-xl mt-2">
	<div class="text-xl font-semibold inline-block">
		Recent Transactions
		<div class="inline-block float-right">
			<div class="inline-block float-right">
				<div class="inline-block mr-4">
					<div class="input-group relative flex flex-wrap items-stretch w-full">
						<input
							type="search"
							placeholder="Search"
							class="input input-sm input-bordered w-full max-w-xs"
							value=""
						/>
					</div>
				</div>
				<div class="dropdown dropdown-bottom dropdown-end">
					<button class="btn btn-sm btn-outline">
						<FunelIcon class="w-6 h-6"></FunelIcon>
						Filter
					</button>
					<ul class="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52">
						<li><span>Paris</span></li>
						<li><span>London</span></li>
						<li><span>Canada</span></li>
						<li><span>Peru</span></li>
						<li><span>Tokyo</span></li>
						<div class="divider mt-0 mb-0"></div>
						<li><span>Remove Filter</span></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="divider mt-2"></div>
	<div class="h-full w-full pb-6 bg-base-100">
		<div class="overflow-x-auto w-full">
			<table class="table w-full">
				<thead>
					<tr>
						<th>Name</th>
						<th>Email Id</th>
						<th>Location</th>
						<th>Amount</th>
						<th>Transaction Date</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/1-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Alex</div>
								</div>
							</div>
						</td>
						<td>alex@dashwind.com</td>
						<td>Paris</td>
						<td>$100</td>
						<td>4 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/2-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Ereena</div>
								</div>
							</div>
						</td>
						<td>ereena@dashwind.com</td>
						<td>London</td>
						<td>$190</td>
						<td>3 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/3-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">John</div>
								</div>
							</div>
						</td>
						<td>jhon@dashwind.com</td>
						<td>Canada</td>
						<td>$112</td>
						<td>3 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/4-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Matrix</div>
								</div>
							</div></td
						>
						<td>matrix@dashwind.com</td>
						<td>Peru</td>
						<td>$111</td>
						<td>3 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/5-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Virat</div>
								</div>
							</div>
						</td>
						<td>virat@dashwind.com</td>
						<td>London</td>
						<td>$190</td>
						<td>2 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/6-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Miya</div>
								</div>
							</div>
						</td>
						<td>miya@dashwind.com</td>
						<td>Paris</td>
						<td>$230</td>
						<td>2 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/3-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Virat</div>
								</div>
							</div>
						</td>
						<td>virat@dashwind.com</td>
						<td>Canada</td>
						<td>$331</td>
						<td>2 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/1-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Matrix</div>
								</div>
							</div>
						</td>
						<td>matrix@dashwind.com</td>
						<td>London</td>
						<td>$581</td>
						<td>2 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/3-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Ereena</div>
								</div>
							</div>
						</td>
						<td>ereena@dashwind.com</td>
						<td>Tokyo</td>
						<td>$151</td>
						<td>2 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/2-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">John</div>
								</div>
							</div>
						</td>
						<td>jhon@dashwind.com</td>
						<td>Paris</td>
						<td>$91</td>
						<td>2 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/3-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Virat</div>
								</div>
							</div>
						</td>
						<td>virat@dashwind.com</td>
						<td>Canada</td>
						<td>$161</td>
						<td>1 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/4-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div><div class="font-bold">Matrix</div></div>
							</div>
						</td>
						<td>matrix@dashwind.com</td>
						<td>US</td>
						<td>$121</td>
						<td>1 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/6-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Ereena</div>
								</div>
							</div>
						</td>
						<td>jhon@dashwind.com</td>
						<td>Tokyo</td>
						<td>$713</td>
						<td>1 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/2-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div><div class="font-bold">John</div></div>
							</div>
						</td>
						<td>ereena@dashwind.com</td>
						<td>London</td>
						<td>$217</td>
						<td>1 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/3-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Virat</div>
								</div>
							</div>
						</td>
						<td>virat@dashwind.com</td>
						<td>Paris</td>
						<td>$117</td>
						<td>1 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/7-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Miya</div>
								</div>
							</div>
						</td>
						<td>jhon@dashwind.com</td>
						<td>Canada</td>
						<td>$612</td>
						<td>1 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/3-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Matrix</div>
								</div>
							</div>
						</td>
						<td>matrix@dashwind.com</td>
						<td>London</td>
						<td>$631</td>
						<td>1 Apr</td>
					</tr>
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/2-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div>
									<div class="font-bold">Virat</div>
								</div>
							</div>
						</td>
						<td>ereena@dashwind.com</td>
						<td>Tokyo</td>
						<td>$151</td>
						<td>1 Apr</td>
					</tr><tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-circle w-12 h-12">
										<img src="https://reqres.in/img/faces/3-image.jpg" alt="Avatar" />
									</div>
								</div>
								<div><div class="font-bold">Ereena</div></div>
							</div>
						</td>
						<td>virat@dashwind.com</td>
						<td>Paris</td>
						<td>$617</td>
						<td>1 Apr</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
