import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function Section({ children }: Props) {
  return <section className="py-8">{children}</section>;
}

export default Section;
