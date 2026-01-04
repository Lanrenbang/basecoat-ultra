<script lang="ts">
  import type { Snippet } from 'svelte';
  
  // Svelte 5 Runes: 使用 $props() 接收属性
  let { 
    children, 
    type = 'button',
    variant = 'primary',
    size = 'md',
    class: className = '',
    ...rest 
  }: {
    children?: Snippet;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    class?: string;
    [key: string]: any;
  } = $props();

  // 使用 $derived 确保属性更新时类名同步更新
  const baseClass = 'btn';
  const variantClass = $derived(variant !== 'primary' ? `btn-${variant}` : '');
  const sizeClass = $derived(size !== 'md' ? `btn-${size}` : '');
  
  const finalClass = $derived([baseClass, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' '));
</script>

<button {type} class={finalClass} {...rest}>
  {@render children?.()}
</button>

<style>
  @import "../../../../ultra/src/css/parts/components/button.css";
  @reference "../reference.css";
</style>