import type { APIRoute } from 'astro';
import { CURRENT_VERSION } from '../../config';

export const GET: APIRoute = () => {
  return Response.redirect(`/covenant/${CURRENT_VERSION}`, 302);
};