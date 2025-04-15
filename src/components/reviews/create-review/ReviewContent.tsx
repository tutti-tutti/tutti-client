'use client';

import { useActionState, useEffect, useRef, useState } from 'react';

import { createReviewAction } from '@/server-actions';
import { cn } from '@/utils';
import {
  QUERY_KEYS_ENDPOINT,
  REVIEW_CONSTANTS,
  REVIEW_TAGS,
} from '@/constants';
import type { CreateReviewParams, CreateReviewState } from '@/types';
import StarClick from './StarClick';
import CreateReviewButtonBox from './CreateReviewButtonBox';
import { useRevalidateServerClient } from '@/hooks';
import { reviewServerStore } from '@/stores';

interface ReviewContentProps {
  awaitedParams: CreateReviewParams;
}

const initialCreateReviewState: CreateReviewState = {
  isSuccess: false,
};

const { RATING, REVIEW_CONTENT } = REVIEW_CONSTANTS;

const ReviewContent = ({ awaitedParams }: ReviewContentProps) => {
  const [characterCnt, setCharacterCnt] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { revalidateServerClient } = useRevalidateServerClient();
  const { getParams } = reviewServerStore();
  const { productIdParams, reviewSortSearchParams } = getParams();

  const boundCreateReviewAction = createReviewAction.bind(
    null,
    awaitedParams.orderId,
    awaitedParams.productItemId,
  );

  const [
    createReviewState,
    boundCreateReviewFormAction,
    isCreateReviewPending,
  ] = useActionState(boundCreateReviewAction, initialCreateReviewState);

  useEffect(() => {
    if (!createReviewState.isSuccess) return;

    revalidateServerClient(
      REVIEW_TAGS.PRODUCT_REVIEWS(awaitedParams.productId),
      [QUERY_KEYS_ENDPOINT.REVIEWS, productIdParams, reviewSortSearchParams],
    );
  }, [
    createReviewState.isSuccess,
    revalidateServerClient,
    awaitedParams.productId,
    productIdParams,
    reviewSortSearchParams,
  ]);

  const handleRatingClick = () => {
    if (!textareaRef.current) return;

    textareaRef.current.focus();
  };

  return (
    <form
      className="gap-2xl flex w-full flex-col"
      action={boundCreateReviewFormAction}
    >
      <fieldset>
        <div className="gap-xs flex items-center">
          <label
            className="font-style-subHeading text-text-primary"
            htmlFor="review-rating"
          >
            {RATING.LABEL}
          </label>
          <p className="font-style-paragraph text-text-danger">
            {createReviewState.ratingError}
          </p>
        </div>
        <StarClick onRatingClick={handleRatingClick} />
      </fieldset>
      <fieldset className="gap-xs mb-5xl flex w-full flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <div className="gap-xs flex items-center">
            <label
              className="font-style-subHeading text-text-primary"
              htmlFor="write-review"
            >
              {REVIEW_CONTENT.LABEL}
            </label>
            <p className="font-style-paragraph text-text-danger">
              {createReviewState.reviewContentError}
            </p>
          </div>
          <div
            className={cn(
              'font-style-info text-text-tertiary',
              characterCnt === 1000 && 'text-text-danger',
            )}
          >
            {characterCnt} / 1,000
          </div>
        </div>
        <textarea
          ref={textareaRef}
          className="border-border-primary px-md py-sm h-80 w-full resize-none rounded-md border outline-0"
          placeholder={REVIEW_CONTENT.PLACEHOLDER}
          onChange={e => setCharacterCnt(e.target.value.length)}
          maxLength={1000}
          name="reviewContent"
        />
      </fieldset>
      <CreateReviewButtonBox isCreateReviewPending={isCreateReviewPending} />
    </form>
  );
};

export default ReviewContent;
