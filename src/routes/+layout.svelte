<script lang="ts">
  import { enhance} from "$app/forms"
	import type { SubmitFunction } from "@sveltejs/kit";
  import {page} from '$app/stores'
	import '../app.postcss';
  
  const submitUpdateTheme:SubmitFunction = ({action}) => {
    const theme = action.searchParams.get('theme');

    if(theme) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }

  const themes = ["light", "dark", 'mytheme', 'pro']
  import { Dropdown, DropdownItem, Button, DropdownHeader, Chevron } from 'flowbite-svelte'

</script>

<!-- <div class="bg-base-300 min-h-full">
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">PAYME</a>
    </div>

    <Button class="btn-primary"><Chevron>Accessibility</Chevron></Button>
    <Dropdown class="bg-gray-200 w-60 p-2 rounded-md">
      <form method="POST" use:enhance={submitUpdateTheme}>
        {#each themes as theme}
          <li class="">
            <button class="w-full rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-600 flex justify-between" formaction="/?/setTheme&theme={theme}&redirectTo={$page.url.pathname}">{theme}
            <div class="flex h-full flex-shrink-0 flex-wrap gap-1">
              <div class="bg-primary w-2 rounded">&nbsp;</div> 
              <div class="bg-secondary w-2 rounded"></div> 
              <div class="bg-accent w-2 rounded"></div> 
              <div class="bg-neutral w-2 rounded"></div>
            </div>
          </button>
          </li>
        {/each}
      </form>
    </Dropdown>

  </div>
	<slot />
</div> -->

<slot/>