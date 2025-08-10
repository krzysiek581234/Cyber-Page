import type { ReactNode } from 'react';

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
};

function Heading({ level = 1, children }: Props) {
  const Tag = `h${level}` as const;
  return <Tag className="text-2xl font-bold">{children}</Tag>;
}

export default Heading;
