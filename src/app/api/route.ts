import {type NextRequest, NextResponse} from 'next/server';
import {z} from 'zod';
import {db} from '@/db/config.ts';
import {rfcTable} from '@/db/schema/index.ts';
import rfcJson from '@/db/data/rfc-data.json' assert {type: 'json'};

// Export async function GET(request: NextRequest) {
//   const rfcTableSchema = z.array(
//     z.object({
//       docId: z.string().max(10),
//       title: z.string().max(255),
//       draft: z.string().max(100).nullable(),
//       source: z.string().max(100),
//       status: z.string().max(30),
//       pageCount: z.number().int().nullable(),
//       pubStatus: z.string().max(30),
//       pubYear: z.number().int().nullable(),
//       pubMonth: z.number().int().min(1).max(12).nullable(),
//     }),
//   );
//   const parsed = rfcTableSchema.safeParse(rfcJson);
//   if (!parsed.success) {
//     return NextResponse.json('Invalid data');
//   }

//   const result = await db.insert(rfcTable).values(parsed.data);

//   console.log(result);

//   return NextResponse.json({message: 'Hello from Next.js!'});
// }
