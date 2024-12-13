import AuthContext from 'context/AuthContext';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from 'firebaseApp';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

interface PostListProps {
  hasNavigation?: boolean;
  defaultTab?: TabType | CategoryType;
}

export interface CommentsInterface {
  content: string;
  uid: string;
  email: string;
  createdAt: string;
}

export interface PostProps {
  id?: string;
  title: string;
  email: string;
  summary: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  uid: string;
  category?: CategoryType;
  comments?: CommentsInterface[];
}
type TabType = 'all' | 'my';

export type CategoryType = 'JavaScript' | 'React' | 'TypeScript' | 'NextJs';

export const CATEGORIES: CategoryType[] = [
  'JavaScript',
  'React',
  'TypeScript',
  'NextJs',
];

export default function PostList({
  hasNavigation = true,
  defaultTab = 'all',
}: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType | CategoryType>(
    defaultTab
  );
  const [post, setPost] = useState<PostProps[]>([]);
  const { user } = useContext(AuthContext);

  const getPosts = useCallback(async () => {
    setPost([]);
    const postsRef = collection(db, 'posts');
    let postsQuery;

    if (activeTab === 'my' && user) {
      postsQuery = query(
        postsRef,
        where('uid', '==', user.uid),
        orderBy('createdAt', 'asc')
      );
    } else if (activeTab === 'all') {
      // 모든 글 보여주기
      postsQuery = query(postsRef, orderBy('createdAt', 'asc'));
    } else {
      // 카테고리 글 보여주기
      postsQuery = query(
        postsRef,
        where('category', '==', activeTab),
        orderBy('createdAt', 'asc')
      );
    }

    const datas = await getDocs(postsQuery);
    datas?.forEach((doc) => {
      const dataObj = { ...doc.data(), id: doc.id };
      setPost((prev) => [...prev, dataObj as PostProps]);
    });
  }, [activeTab, user]);

  const handleDelete = async (id: string) => {
    const confirm = window.confirm('해당 게시글을 삭제하시겠습니까?');
    if (confirm && id) {
      await deleteDoc(doc(db, 'posts', id));

      toast.success('게시글을 삭제했습니다.');
      getPosts();
    }
  };

  useEffect(() => {
    if (!user && activeTab === 'my') {
      setActiveTab('all');
    }
    getPosts();
  }, [activeTab, getPosts, user]);

  return (
    <>
      {hasNavigation && (
        <div className='post__navigation'>
          <div
            role='presentation'
            onClick={() => setActiveTab('all')}
            className={activeTab === 'all' ? 'post__navigation--active' : ''}
          >
            전체
          </div>
          {user && (
            <div
              role='presentation'
              onClick={() => setActiveTab('my')}
              className={activeTab === 'my' ? 'post__navigation--active' : ''}
            >
              나의 글
            </div>
          )}
          {CATEGORIES?.map((category) => (
            <div
              key={category}
              role='presentation'
              onClick={() => setActiveTab(category)}
              className={
                activeTab === category ? 'post__navigation--active' : ''
              }
            >
              {category}
            </div>
          ))}
        </div>
      )}
      <div className='post__list'>
        {post?.length > 0 ? (
          post.map((post, index) => (
            <div key={post?.id} className='post__box'>
              <Link to={`/posts/${post?.id}`}>
                <div className='post__profile-box'>
                  <div className='post__profile' />
                  <div className='post__author-name'>{post?.email}</div>
                  <div className='post__date'>{post?.createdAt}</div>
                </div>
                <div className='post__title'>{post?.title}</div>
                <div className='post__text'>{post?.summary}</div>
              </Link>

              {post?.email === user?.email && (
                <div className='post__utils-box'>
                  <div
                    className='post__delete'
                    role='presentation'
                    onClick={() => handleDelete(post.id as string)}
                  >
                    삭제
                  </div>
                  <Link to={`/posts/edit/${post?.id}`} className='post__edit'>
                    수정
                  </Link>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className='post__no-post'>게시글이 없습니다.</div>
        )}
      </div>
    </>
  );
}
