import styled from 'styled-components';

interface ReadingDiaryProps {
  isPc: boolean;
  isTablet: boolean;
}

const ReadingDiary = ({ isPc, isTablet }: ReadingDiaryProps) => {
  const title = isTablet
    ? `매일 매일\n알아서 기록하는 독서 일기`
    : `매일 매일 알아서\n기록하는 독서 일기`;

  const text = () => {
    if (isPc) {
      return `오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지 독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고, 공유도 가능해요.`;
    } else if (isTablet) {
      return `오늘은 아이가 어떤 책을 읽었는지, 어떤 활동에 참여했는지\n독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고, 공유도 가능해요.`;
    } else {
      return `오늘은 아이가 어떤 책을 읽었는지,\n어떤 활동에 참여했는지\n독서일기를 통해 확인해보세요.\n읽기만 해도 자동으로 기록되고,\n공유도 가능해요.`;
    }
  };
  return (
    <section>
      <div>{title}</div>
      <div>{text()}</div>
    </section>
  );
};

export default ReadingDiary;
