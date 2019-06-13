// -----------------------------------------------------------------------
//	yoshida_higashi.js
//
//					Mar/15/2019
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** yoshida_higashi *** start ***")

	var file_in = ""
	file_in = "./may08_2019.json"
	proc01(file_in,".contents_k")

	file_in = "./mar13_2019.json"
	proc01(file_in,".contents_j")
	file_in = "./feb13_2019.json"
	proc01(file_in,".contents_i")
	file_in = "./jan22_2019.json"
	proc01(file_in,".contents_h")
	file_in = "./dec12_2018.json"
	proc01(file_in,".contents_g")
	file_in = "./nov20_2018.json"
	proc01(file_in,".contents_f")
	file_in = "./oct10_2018.json"
	proc01(file_in,".contents_e")
	file_in = "./sep12_2018.json"
	proc01(file_in,".contents_d")
	file_in = "./jul17_2018.json"
	proc01(file_in,".contents_c")
	file_in = "./jun13_2018.json"
	proc01(file_in,".contents_b")
	file_in = "./may15_2018.json"
	proc01(file_in,".contents_a")
	jQuery("#outarea_hh").text ("*** yoshida_higashi *** end ***")
})
// -----------------------------------------------------------------------
function proc01 (file_in,area_out)
{
	jQuery("#outarea_aa").text ("*** yoshida_higashi *** start ***")

	var data_text = ""


	jQuery.getJSON (file_in,function (data_aa)
		{
		var str_out = ""
		str_out += "<table>"
		str_out += "<tr>"
		str_out += "<th>学年</th>"
		str_out += "<th>タイトル</th>"
		str_out += "<th>作者</th>"
		str_out += "<th>絵</th>"
		str_out += "<th>翻訳者</th>"
		str_out += "</tr>"
		const unit_aa = data_aa
		var icount = 0
		for (var key in unit_aa)
			{
			if (key != "date")
				{
				str_out += gen_record_proc(unit_aa[key],icount)
				icount += 1
				}
	
			}
		str_out += "</table>"

		jQuery(area_out).html (str_out)
		})


}

// -----------------------------------------------------------------------
function gen_record_proc(books,icount)
{
	const gakunen = ["１年","２年","３年","４年","５年","６年"]

	var str_out = ""
//	const books = unit_aa[key]
	const nn_max = books.length
	str_out += "<tr>"
	str_out += "<td rowspan='" + nn_max + "'>" + gakunen[icount] + "</td>"
	for (var it=0; it< nn_max; it += 1)
		{
		str_out += "<td>" + books[it].title + "</td>"
		str_out += "<td>" + books[it].author + "</td>"
		str_out += "<td>" + books[it].picture + "</td>"
		str_out += "<td>"
		if ("translator" in books[it])
			{
			str_out += books[it].translator
			}

		str_out += "</td>"
		str_out += "</tr>"
		}

	return	str_out
}

// -----------------------------------------------------------------------
