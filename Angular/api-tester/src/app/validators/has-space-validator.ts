import { FormControl } from '@angular/forms';

export function noSpaceValidator(c: FormControl) {
  let text = c ? c.value : '';

  if (text.includes(' ')) {
    return {
      hasSpaces: true
    }
  }

  return null;
}