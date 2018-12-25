import http from '@/utils/http';

export async function getNotice(type) {
  const res= http.get('/api/v1/common/notice/typeList', { type });
  return res;
}
