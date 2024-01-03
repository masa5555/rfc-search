'use server';

import {db} from '@/db/config.ts';

type GetRfcListParameters = {
  page?: number;
};

const PAGE_SIZE = 10;

export async function getRfcList({page = 0}: GetRfcListParameters) {
  const rfcList = await db.query.rfcTable.findMany({
    limit: PAGE_SIZE,
    offset: page * PAGE_SIZE,
  });
  return rfcList;
}
