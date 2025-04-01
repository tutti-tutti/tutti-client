'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components';

interface CreateReviewButtonBoxProps {
  isCreateReviewPending: boolean;
}

const CreateReviewButtonBox = ({
  isCreateReviewPending,
}: CreateReviewButtonBoxProps) => {
  const { back } = useRouter();

  const handleCancel = () => {
    back();
  };

  const submitText = isCreateReviewPending ? '리뷰등록 중' : '리뷰등록';
  const submitVariant = isCreateReviewPending ? 'disabled' : 'primary';

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
      <Button type="submit" className="flex-auto" variant={submitVariant}>
        {submitText}
      </Button>
    </div>
  );
};

export default CreateReviewButtonBox;
