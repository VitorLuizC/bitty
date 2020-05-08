import type Either from './Either';

/**
 *
 * @param value -
 */
export default function isEither(
  value: unknown,
): value is Either<unknown, unknown> {
  return (value as any)?._kind === 'Left' || (value as any)?._kind === 'Right';
}
