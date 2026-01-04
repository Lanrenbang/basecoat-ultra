<script lang="ts">
  import Input from '@lanrenbang/basecoat-ultra-svelte/components/Input.svelte';
  import Label from '@lanrenbang/basecoat-ultra-svelte/components/Label.svelte';
</script>

<div class="max-w-md">
  <form class="form space-y-4">
    <div class="field">
      <Label for="f-email">Email Address</Label>
      <Input type="email" id="f-email" placeholder="name@example.com" />
      <p class="text-xs text-muted-foreground mt-1.5">We'll never share your email.</p>
    </div>
    <div class="field" data-invalid="true">
      <Label for="f-username">Username</Label>
      <Input type="text" id="f-username" value="error_user" />
      <span role="alert" class="text-xs text-destructive mt-1.5 block">Username is already taken.</span>
    </div>
  </form>
</div>
