'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components';

const CreateReviewButtonBox = () => {
  const { back } = useRouter();

  const handleCancel = () => {
    back();
  };

  return (
    <div className="gap-sm flex w-full">
      <Button
        type="button"
        onClick={handleCancel}
        className="flex-auto"
        variant="primaryOutline"
      >
        작성취소
      </Button>
      <Button type="submit" className="flex-auto">
        리뷰등록
      </Button>
    </div>
  );
};

export default CreateReviewButtonBox;
