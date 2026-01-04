<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    content,
    side = 'top',
    class: className = '',
    ...rest
  }: {
    children: Snippet;
    content: string;
    side?: 'top' | 'bottom' | 'left' | 'right';
    class?: string;
    [key: string]: any;
  } = $props();
</script>

<div 
  class={['inline-block', className].filter(Boolean).join(' ')}
  data-tooltip={content}
  data-side={side}
  {...rest}
>
  {@render children()}
</div>

<style>
  /* Basecoat 的 Tooltip 往往在 tooltip.css 中定义了属性选择器 */
  @import "../../../../ultra/src/css/parts/components/tooltip.css";
  @reference "../reference.css";
</style>
