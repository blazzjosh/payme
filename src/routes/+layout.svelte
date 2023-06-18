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


<slot/>