import React from 'react';
import GeneralLayout from './GeneralLayout';
import CommentsForm from '../components/organisms/CommentsForm';

export default function DetailLayout({ comments, children }) {
  return (
    <GeneralLayout small>
      {children}
      <CommentsForm comments={comments} />
    </GeneralLayout>
  );
}
