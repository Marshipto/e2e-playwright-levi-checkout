import { test, expect } from '@playwright/test';
const recordVideo = false;

test.use({
  video: recordVideo ? 'on' : 'off'
});

test('Levi happypath', async ({ page }) => {

  await page.goto('https://www.levi.com.mx/');
  if (await page.getByRole('button', { name: 'Aceptar' }).isVisible()) {
    await page.getByRole('button', { name: 'Aceptar' }).click();
  }
  await page.getByText('Descubre Hombre').first().click();
  await page.locator('.levimx-levis-plp-gallery-search-1-x-container--layout [data-index="1"] img').first().click();
  await page.locator('.levimx-levis-plp-gallery-search-1-x-container--layout [data-index="1"] img').first().click();
  // Obtener todos los contenedores de selector de tallas (normalmente 2)
  const containers = page.locator('.vtex-store-components-3-x-skuSelectorSubcontainer');
  // Contenedor 0: primera talla (por ejemplo, "W")
  await containers.isVisible();
  const firstContainer = containers.nth(0);
  const firstAvailable_1 = firstContainer.locator('[role="button"]:not(.vtex-store-components-3-x-unavailable)').first();
  await firstAvailable_1.click();
  // Contenedor 1: segunda talla (por ejemplo, "L")
  const secondContainer = containers.nth(1);
  const firstAvailable_2 = secondContainer.locator('[role="button"]:not(.vtex-store-components-3-x-unavailable)').first();
  await firstAvailable_2.click();
  await page.getByRole('button', { name: 'Agregar al carrito' }).click();
  await page.locator('.vtex-minicart-2-x-openIconContainer button').click();
  await page.locator('#proceed-to-checkout').click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'full.png', fullPage: true });
  /*
  const closeIcon = page.locator('.standard-lightbox-close-icon_pers');
  try {
    await closeIcon.waitFor({ state: 'visible', timeout: 20000 }).catch(() => {});
  if (await closeIcon.isVisible()) {
      await closeIcon.click({ force: true });
  }
  } catch (e) {
    
  }*/
});
