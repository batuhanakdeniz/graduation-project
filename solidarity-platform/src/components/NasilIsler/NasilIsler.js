import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HowDoesItWork.scss";
import { Text, Tooltip } from "@chakra-ui/react";
function NasilIsler() {
	return (
		<div className="hdiw-page">
			<Container className="hdiw-page-container" fluid>
				<Row>
					<Col md={12}>
						<Text fontSize="2.4rem" fontWeight="bold" textAlign="center">
							Platform Haritası
						</Text>
					</Col>
					<Col md={12} className="tree-container">
						<div class="tree">
							<ul>
								<li>
									<a href="/">Anasayfa-Harita</a>
									<ul>
										<li>
											<Tooltip
												hasArrow
												label="Sadece marker ile konumlarını görebilirsiniz. Üye olmadan başka bir işlem yapamazsınız"
												fontSize="sm"
												placement="right-end"
											>
												<a href="/">Yardım konumlarını görüntüle</a>
											</Tooltip>
										</li>
										<li>
											<Tooltip
												hasArrow
												label="Sisteme 'Onaylanmamış Üye' olarak üye olacaksınız. Daha sonra üyeliğinizi değiştirmek istediğinizde profil sayfanızdan bu işlemi gerçekleştirebilirsiniz."
												fontSize="sm"
												placement="right-end"
											>
												<a href="/signup">ÜYE OL</a>
											</Tooltip>
											<ul>
												<li>
													<Tooltip
														hasArrow
														label="Üye olduktan hemen sonra, üye olurken kullandığınız mail adresinize bir aktivasyon linki gelecektir. Onaylamadan sisteme giriş yapamazsınız."
														fontSize="sm"
														placement="right-end"
													>
														<button>Mail Aktivasyonu</button>
													</Tooltip>
													<ul>
														<li>
															<Tooltip
																hasArrow
																label="Yardım Admin Onayından geçtikten sonra yayına geçecektir."
																fontSize="sm"
																placement="right-end"
															>
																<button>Yardım Ekle</button>
															</Tooltip>
															<ul>
																<li>
																	<Tooltip
																		hasArrow
																		label="Sistem Adminlerimiz en kısa sürede girdiğiniz içeriği inceleyip onay verecektir."
																		fontSize="sm"
																		placement="right-end"
																	>
																		<button>Admin Onayı</button>
																	</Tooltip>
																	<ul>
																		<li>
																			<button>Yardım Yayında</button>
																		</li>
																	</ul>
																</li>
															</ul>
														</li>
														<li>
															<button>Yardımları Görüntüle</button>
															<ul>
																<li>
																	<button>Yardım Et</button>
																</li>
																<li>
																	<button>Yorum Ekle</button>
																	<ul>
																		<li>
																			<Tooltip
																				hasArrow
																				label="Sistem Adminlerimiz en kısa sürede girdiğiniz içeriği inceleyip onay verecektir."
																				fontSize="sm"
																				placement="right-end"
																			>
																				<button>Admin Onayı</button>
																			</Tooltip>
																			<ul>
																				<li>
																					<button>Yardım Yayında</button>
																				</li>
																			</ul>
																		</li>
																	</ul>
																</li>
																<li>
																	<Tooltip
																		hasArrow
																		label="Oylama sistemimizde girdiğiniz önem derecesinin, yardımın önem derecesine etkisi üye tipinize göre değişiklik gösterecektir."
																		fontSize="sm"
																		placement="bottom-start"
																	>
																		<button>Önem Derecesini Oyla</button>
																	</Tooltip>
																</li>
															</ul>
														</li>
														<li>
															<button>Profil Sayfanı Görüntüle</button>
															<ul>
																<li>
																	<Tooltip
																		hasArrow
																		label="Girilen yardımlar otomatik olarak Admin onay sayfasına düşmektedir. Profilinizden aktif ve bekleyen yardımlarınızı görüntüleyebilir, aynı zamanda yardıma ait detayları da gözden geçirebilirsiniz"
																		fontSize="sm"
																		placement="bottom-end"
																	>
																		<button>
																			Girdiğin Yardımların Durumunu Görüntüle
																		</button>
																	</Tooltip>
																</li>
																<li>
																	<Tooltip
																		hasArrow
																		label="Girilen yorumlar otomatik olarak Admin onay sayfasına düşmektedir. Profilinizden aktif ve bekleyen yardımlarınızı görüntüleyebilir, aynı zamanda yardıma ait detayları da gözden geçirebilirsiniz"
																		fontSize="sm"
																		placement="bottom-end"
																	>
																		<button>
																			Girdiğin Yorumların Durumunu Görüntüle
																		</button>
																	</Tooltip>
																</li>
																<li>
																	<Tooltip
																		hasArrow
																		label="Bu aşamada üyelik tipinizi değiştirmek için sisteme başvuruda bulunabilirsiniz. Adminler onayladığı takdirde işleminiz gerçekleştirilecektir."
																		fontSize="sm"
																		placement="bottom-end"
																	>
																		<button>Üyelik Tipini Değiştir</button>
																	</Tooltip>
																</li>
															</ul>
														</li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default NasilIsler;
