import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-display text-6xl text-leaf">404</p>
      <h1 className="mt-4 font-display text-3xl">This page doesn&apos;t exist.</h1>
      <div className="mt-8 flex justify-center">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </Container>
  );
}
