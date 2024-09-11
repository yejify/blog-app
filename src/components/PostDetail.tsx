import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PostProps } from './PostList';
import { doc, getDoc } from 'firebase/firestore';
import { db } from 'firebaseApp';

export default function PostDetail() {
  const [posts, setPosts] = useState<PostProps | null>(null);
  const params = useParams();

  const getPosts = async (id: string) => {
    if (id) {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);

      setPosts({ id: docSnap.id, ...(docSnap.data() as PostProps) });
    }
  };

  useEffect(() => {
    if (params?.id) getPosts(params?.id);
  }, [params?.id]);

  return (
    <>
      <div className='post__detail'>
        <div className='post__box'>
          <div className='post__title'>{posts?.title}</div>
          <div className='post__profile-box'>
            <div className='post__profile' />
            <div className='post__author-name'>{posts?.email}</div>
            <div className='post__date'>{posts?.createdAt}</div>
          </div>
          <div className='post__utils-box'>
            <div className='post_delete'>삭제</div>
            <div className='post__edit'>
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </div>
          <div className='post__text post__text--pre-wrap'>
            {posts?.content}
          </div>
        </div>
      </div>
    </>
  );
}
