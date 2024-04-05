<script lang="ts">
	//* States
	import { pageTitleState } from '$states/PageTitleState.svelte';

	pageTitleState.pageTitle = 'Documentation';

	const CODE_ONE = `import Title from "../components/Typography/Title"
  <Title>Your Title here</Title>`;
	const CODE_TWO = `const INITIAL_LEAD_OBJ = {
   first_name : "", 
   last_name : "", 
   email : "" 
  } 
   const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ) 
   const updateFormValue = ({updateType, value}) => {
    setErrorMessage("") 
    setLeadObj({...leadObj, [updateType] : value})
   }

<InputText type="text" defaultValue={leadObj.first_name}  
  updateType="first_name" containerStyle="mt-4"  
  labelTitle="First Name" updateFormValue={updateFormValue}/>`;
	const CODE_THREE = `<TitleCard title={"Card Title"}> <h1>Card Body</h1></TitleCard>`;
</script>

<main class="flex-1 overflow-y-auto md:pt-4 pt-4 px-6 bg-base-200">
	<div class="">
		<div class="bg-base-100 flex overflow-hidden rounded-lg" style="height: 82vh;">
			<div class="flex-none p-4">
				<ul class="menu w-56 mt-10 text-sm">
					<li class="menu-title"><span class="">Components</span></li>
					<li class="bordered"><span>Typography</span></li>
					<li class=""><span>Form Input</span></li>
					<li class=""><span>Cards</span></li>
				</ul>
			</div>
			<div class="grow pt-16 overflow-y-scroll">
				<article class="prose">
					<h1 class="">Components</h1>
					We have added some global components that are used commonly inside the project.
					<h2 id="component1">Typography</h2>
					<div>
						These components are present under <span class="badge mt-0 mb-0 badge-ghost"
							>/components/Typography</span
						>
						folder. It accepts styleClass as props which can be used to pass additional className for
						style. It has following components which you can import and use it -
						<div class="mockup-code mt-4"><pre class="my-0 py-0"><code>{CODE_ONE}</code></pre></div>
						<ul>
							<li>
								<span class="font-bold">Title</span> - Use this component to show title
								<p class="text-2xl font-bold undefined">Title Example</p>
							</li>
							<li>
								<span class="font-bold">Subtitle</span> - Component that shows text smaller than
								title
								<div class="text-xl font-semibold mt-4 mb-6">Subtitle Example</div>
							</li>
							<li>
								<span class="font-bold">ErrorText</span> - Used for showing error messages
								<p class="text-center text-error mt-2">Error Text Example</p>
							</li>
							<li>
								<span class="font-bold">HelperText</span> - Used for showing secondary message
								<div class="text-slate-400 undefined">Helper Text Example</div>
							</li>
						</ul>
					</div>
					<h2 id="component2">Form Input</h2>
					<p>
						Many times we have to use form input like text, select one or toogle and in every file
						we have to handle its state management, here we have added global form component that
						can be used in any file and state variables can be managed by passing props to it. It is
						present in <span class="badge mt-0 mb-0 badge-ghost">/components/Input</span> folder.
					</p>
					Ex-
					<div class="mockup-code mt-4"><pre class="my-0 py-0"><code>{CODE_TWO}</code></pre></div>
					<div class="form-control w-full mt-3">
						<span class="label"
							><span class="label-text text-base-content undefined">Label Title</span>
						</span>
						<input
							type="text"
							placeholder=""
							class="input input-bordered w-full"
							value="input value"
						/>
					</div>
					<p>
						This example is from add new lead modal, here we are importing component for creating
						text input and passing some props to handle its content and state variable. Description
						of props are as follows -
					</p>
					<ul>
						<li>
							<span class="font-bold">type</span> - Input type value like number, date, time etc..
						</li>
						<li>
							<span class="font-bold">updateType</span> - This is used to update state variable in parent
							component
						</li>
						<li>
							<span class="font-bold">containerStyle</span> - Style class for container of input, which
							include label as well
						</li>
						<li><span class="font-bold">labelTitle</span> - Title of the label</li>
						<li>
							<span class="font-bold">updateFormValue</span> - Function of parent component to update
							state variable
						</li>
					</ul>
					<h2 id="component3">Cards</h2>
					<p>
						<a href="https://daisyui.com/components/card/" target="_blank">Daisy UI</a> already have
						many cards layout, on top of that we have added one card component that accept title props
						and shows children inside its body. Also there is a divider between title and body of card.
						On more provision has been added to add buttons on top left side of card using TopSideButtons
						props (check leads page).
					</p>
					Ex -
					<div class="mockup-code mt-4"><pre class="my-0 py-0"><code>{CODE_THREE}</code></pre></div>
					<div class="p-8 bg-base-300 rounded-lg mt-4">
						<div class="card w-full p-6 bg-base-100 shadow-xl mt-6">
							<div class="text-xl font-semibold">Card Title</div>
							<div class="divider mt-2"></div>
							<div class="h-full w-full pb-6 bg-base-100"><h1>Card Body</h1></div>
						</div>
					</div>
					<div class="h-24"></div>
				</article>
			</div>
		</div>
	</div>
	<div class="h-16"></div>
</main>
