<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import flatpickr from 'flatpickr';
  import { Mandarin } from 'flatpickr/dist/l10n/zh.js';
  import { MandarinTraditional } from 'flatpickr/dist/l10n/zh-tw.js';
  import type { Instance } from 'flatpickr/dist/types/instance';
  import type { Options } from 'flatpickr/dist/types/options';

  // Custom English configurations
  const EnglishFull = {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      longhand: [
        "Sunday",
        "Monday", 
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    months: {
      shorthand: [
        "January",
        "February", 
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      longhand: [
        "January",
        "February",
        "March", 
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
  };

  const EnglishShort = {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      longhand: [
        "Sunday",
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr", 
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      longhand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May", 
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  // Locale configurations
  const locales = {
    'zh': Mandarin,
    'zh-tw': MandarinTraditional,
    'en-full': EnglishFull,
    'en-short': EnglishShort,
  };

  let {
    value = $bindable(''),
    options = {},
    placeholder = 'Select date',
    inline = false,
    locale = 'en-short',
    class: className = '',
    ...rest
  }: {
    value?: string | Date | Date[];
    options?: Options;
    placeholder?: string;
    inline?: boolean;
    locale?: string;
    class?: string;
    [key: string]: any;
  } = $props();

  let element: HTMLElement | undefined = $state();
  let instance: Instance;

  const finalClass = $derived(
    inline 
      ? ['datepicker', className].filter(Boolean).join(' ')
      : ['input datepicker', className].filter(Boolean).join(' ')
  );

  onMount(() => {
    if (element) {
      // Get locale configuration
      const localeConfig = locales[locale] || EnglishShort;
      
      instance = flatpickr(element, {
        ...options,
        inline,
        defaultDate: value,
        locale: localeConfig,
        shorthandCurrentMonth: locale === "en-short", // Only use shorthand for English abbreviated
        onChange: (selectedDates, dateStr) => {
          value = dateStr;
        }
      });
    }
  });

  onDestroy(() => {
    instance?.destroy();
  });
</script>

{#if inline}
  <div bind:this={element} class={finalClass} {...rest}></div>
{:else}
  <input 
    bind:this={element} 
    type="text" 
    class={finalClass} 
    {placeholder}
    {...rest} 
  />
{/if}

<style>
  @reference "../reference.css";
</style>
