import axios from 'axios';
import queryString from 'query-string';
import { DocumentInterface, DocumentGetQueryInterface } from 'interfaces/document';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDocuments = async (
  query?: DocumentGetQueryInterface,
): Promise<PaginatedInterface<DocumentInterface>> => {
  const response = await axios.get('/api/documents', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDocument = async (document: DocumentInterface) => {
  const response = await axios.post('/api/documents', document);
  return response.data;
};

export const updateDocumentById = async (id: string, document: DocumentInterface) => {
  const response = await axios.put(`/api/documents/${id}`, document);
  return response.data;
};

export const getDocumentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/documents/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDocumentById = async (id: string) => {
  const response = await axios.delete(`/api/documents/${id}`);
  return response.data;
};
