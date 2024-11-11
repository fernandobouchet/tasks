interface Props {
  params: {
    boardId: string;
  };
}

export default function Board({ params }: Props) {
  return <div>{params.boardId}</div>;
}
