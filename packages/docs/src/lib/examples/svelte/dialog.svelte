<script lang="ts">
  import Dialog from '@lanrenbang/basecoat-ultra-svelte/components/Dialog.svelte';
  import Button from '@lanrenbang/basecoat-ultra-svelte/components/Button.svelte';
  import Input from '@lanrenbang/basecoat-ultra-svelte/components/Input.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';

  let dialogOpen = $state(false);
  let alertOpen = $state(false);
</script>

<div class="flex gap-4">
  <Button variant="outline" onclick={() => dialogOpen = true}>Open Dialog</Button>
  <Dialog bind:open={dialogOpen} title="Edit Profile" description="Make changes to your profile here. Click save when you're done.">
    <div class="space-y-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <Label class="text-right">Name</Label>
        <Input class="col-span-3" value="Pedro Duarte" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <Label class="text-right">Username</Label>
        <Input class="col-span-3" value="@peduarte" />
      </div>
    </div>
    {#snippet footer()}
      <Button variant="primary" onclick={() => dialogOpen = false}>Save changes</Button>
    {/snippet}
  </Dialog>

  <Button variant="destructive" onclick={() => alertOpen = true}>Open Alert Dialog</Button>
  <Dialog bind:open={alertOpen} role="alertdialog" title="Are you absolutely sure?" description="This action cannot be undone. This will permanently delete your account.">
    <div></div>
    {#snippet footer()}
      <Button variant="outline" onclick={() => alertOpen = false}>Cancel</Button>
      <Button variant="destructive" onclick={() => alertOpen = false}>Delete</Button>
    {/snippet}
  </Dialog>
</div>
